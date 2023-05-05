"""_summary_
    File hand.py
    https://google.github.io/mediapipe/solutions/hands
"""

import cv2 as cv
import os
import time

import hand


pTime = 0
capture = cv.VideoCapture(0)

# folder path
folderPath = 'Learning/Self/opencv/finger/imgFingers'

# read the folder
lst = os.listdir(folderPath)
lst_2 = []

# loop to get image in folder
for i in lst:
    # print(i)

    # Get source of image => Learning/Self/opencv/finger/imgFingers/1.png => 6.png
    print(f'{folderPath}/{i}')

    # add source to image
    image = cv.imread(f'{folderPath}/{i}')

    # add ma tran image va lst_2
    lst_2.append(image)

# checking length of array
print(len(lst_2))  # 6

# lay ra shape of image
print(lst_2[0].shape)  # (132, 109, 3)

print(lst)  # ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']

# phát hiện ra bàn tay, detectionCon tạm hiểu là độ tin cậy tối thiểu
detector = hand.handDetector(detectionCon=1)

# list finger
fingerId = [4, 8, 12, 16, 20]


while True:
    ret, frame = capture.read()

    # find hands
    frame = detector.findHands(frame)

    # find Position | phát hiện vị trí và draw 20 điểm trên bàn tay ra
    lmList = detector.findPosition(frame, draw=False)

    print(lmList)

    # nếu có bàn tay
    if len(lmList) != 0:
        # create a array empty
        fingers = []

        # ngón cái [4] - Kiểm tra xem [4] nằm bên trái hay bên phải điểm [3]
        # - lmList[fingerId[0]][1] - [0] là pt thứ 0 trong fingerId
        # - [1] là pt thứ 1 trong video input => trái, phải
        # - lmList[fingerId[0] - 1][1] - fingerId[0] - 1: kiểm tra ngón cái với điểm số 3 / 4 - 1 = 3 (đốt thứ 3)
        if lmList[fingerId[0]][1] < lmList[fingerId[0] - 1][1]:
            print('Ngón___đang mở', id)
            fingers.append(1)

            # show ngón đang mở
            print('Giá trị của ngón đang mở: ', lmList[fingerId[0]][1])
            print('Giá trị của đốt ngón đang mở: ',
                  lmList[fingerId[0] - 1][1])
        else:
            fingers.append(0)

        # loop from 1 -> 5 (8, 12, 16, 20) / because array have 4 index
        for id in range(1, 5):
            print('id: ', id)

            # ngón trỏ - [8][2] - 8 là dốt ngón tay thứ 8, 2 là phần tử thứ 2 => 0, 1, 2 | 2 là chiều cao (cao, thấp)
            # Logic: ngón nào đang mở thì thêm vào array 'fingers' 1 - ngược lại thêm 0
            if lmList[fingerId[id]][2] < lmList[fingerId[id] - 2][2]:
                print('Ngón___đang mở', id)
                fingers.append(1)

                # show ngón đang mở
                print('Giá trị của ngón đang mở: ', lmList[fingerId[id]][2])
                print('Giá trị của đốt ngón đang mở: ',
                      lmList[fingerId[id] - 2][2])
            else:
                fingers.append(0)

        print(f'Array fingers is {fingers}')
        countFingers = fingers.count(1)
        print('Số ngón tay đang mở: ', countFingers)

        # for first finger

        # save value image[0] shape
        """
        Image: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']
        0 -> 5
        countFingers - 1 =>
            - mặc định là -1 => image cuối cùng => k ngón
            - nếu giơ 1 ngón => countFingers = 1 - 1 => 0 => image => 1.png => 1 ngón
            ... (tương tự đến hết)
        """
        height, width, channel = lst_2[countFingers - 1].shape

        # gán dl vào frame / gán image vào frame  | lấy 1 vùng trong Frame or Image => gán vùng = image ngón tay
        frame[0:height, 0:width] = lst_2[countFingers - 1]  # (132, 109, 3)

        # vẽ hình chữ nhật hiện số ngón tay
        cv.rectangle(frame, (0, 200), (150, 400), (0, 255, 0), -1)

        # add text
        cv.putText(frame, str(countFingers), (0, 390),
                   cv.FONT_HERSHEY_COMPLEX, 8, (255, 0, 0), 10)

    # show FPS | time.time() => trả về số giây, tính từ 0:0:00 ngày 1/1/1970 theo giờ UTC , gọi là (thời điểm bắt đầu thời gian)
    cTime = time.time()
    # 1 chia (thời gian hiện tại - thời gian ban đầu) | Tính FPS Frames per second - đây là  chỉ số khung hình trên mỗi giây
    fps = 1/(cTime-pTime)

    # gán lại để chạy lại vòng mới
    pTime = cTime

    # print(fps)
    # print(type(fps))  # float

    # display FPS on screen | putText
    cv.putText(frame, f'FPS: {int(fps)}', (150, 70),
               cv.FONT_HERSHEY_COMPLEX, 1.8, (0, 255, 0), 3)

    # gán dl vào frame / gán image vào frame
    # frame[0:height, 0:width] = lst_2[0]  # (132, 109, 3)

    cv.imshow('Window capture', frame)

    if cv.waitKey(1) == ord('q'):
        break

capture.release()
cv.destroyAllWindows()
