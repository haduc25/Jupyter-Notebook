import numpy as np
import cv2 as cv
capture = cv.VideoCapture(0)  # Nếu có nhiều webcam thì id 1, 2, 3...


"""_summary_
    cv.VideoCapture(0)  # Nếu có nhiều webcam thì id 1, 2, 3...
    cv.VideoCapture(video.mp4)  # Dùng video
    cv.VideoCapture(pathVideo)
    """

# Cho chụp ảnh liên tục
while True:
    ret, frame = capture.read()  # đọc img & chuyển về ret, frame
    # print(ret)

    if not ret:
        print('\n\n\nWebcam đang được sử dụng!\n\n\n')
        break

    # set width, height
    width = int(capture.get(3))
    height = int(capture.get(4))

    # resize / small = 50% frame ban đầu
    small_frame = cv.resize(frame, (0, 0), fx=.5, fy=.5)

    # create a image only black with value is 0, size = webcam
    image = np.zeros(frame.shape, np.uint8)

    """_summary_
        image = np.zeros(shape, dtype)
        https://numpy.org/doc/stable/reference/generated/numpy.zeros.html
        
        # data type: np.uint8
        
        ###################################
        width = int(capture.get(3)) 
            - Ép kiểu
            - capture.get(3) => 3 là chiểu rộng
            - capture.get(4) => 4 là chiểu cao
    """

    # chia ra 4 frame | `//` chia hết số nguyên
    # image 1 - từ đầu đến giữa chiều cao chia 2, từ đầu đến giữa chiều ngang chia 2 | top left
    image[:height//2, :width//2] = small_frame

    # image 2 - từ đầu đến giữa chiều cao chia 2, từ giữa chiều ngang chia 2 đến cuối | top right
    image[:height//2, width//2:] = small_frame

    # image 3 - từ chiều cao chia 2 đến cuối, từ đầu đến chiều ngang chia 2 | bottom left
    image[height//2:, :width//2] = small_frame

    # image 4 - từ chiều cao chai 2 đến cuối, từ chiều ngang chia 2 đến cuối | bottom right
    # image[height//2:, width//2:] = small_frame

    # rotate image 4
    image[height//2:, width //
          2:] = cv.rotate(small_frame, cv.ROTATE_180)  # 180deg

    # show img
    cv.imshow('My Capture', image)
    # cv.imshow('My Capture', frame)

    # waiting key / 1s
    if (cv.waitKey(1) == ord('q')):
        break

# exit camera
capture.release()

# close window
cv.destroyAllWindows()

"""_summary_
ret: return true/false
    - true: quá trình chụp ảnh diễn ra ok
    - false: khi camera bị chiếm dụng bởi phần mềm khác
"""
