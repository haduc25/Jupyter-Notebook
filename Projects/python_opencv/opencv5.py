import numpy as np
import cv2 as cv
capture = cv.VideoCapture('Learning/Self/opencv/videos/meow.MP4')

# Cho chụp ảnh liên tục
while True:
    ret, frame = capture.read()  # đọc img & chuyển về ret, frame
    if not ret:
        print('\n\n\nWebcam đang được sử dụng!\n\n\n')
        break

    # set width, height
    width = int(capture.get(3))
    height = int(capture.get(4))

    # print width, height
    print(width, height)  # 576, 1024

    # draw a rectangle - green
    image = cv.rectangle(frame, (0, 0), (200, 400), (0, 255, 0), 5)

    # draw a square - blue
    image = cv.rectangle(frame, (200, 200), (500, 500), (255, 0, 0), 5)

    # draw a square fill - red
    image = cv.rectangle(frame, (300, 300), (100, 100), (0, 0, 255), -1)

    # draw a circle circle - pink
    image = cv.circle(frame, (150, 150), 70, (203, 192, 255), 5)

    # draw a square circle fill - light blue
    image = cv.circle(frame, (400, 400), 70, (255, 192, 203), -1)

    # draw a triangle
    # https://www.geeksforgeeks.org/draw-a-triangle-with-centroid-using-opencv/

    # insert text - white
    font = cv.FONT_HERSHEY_COMPLEX  # set font
    image = cv.putText(frame, 'Meow meow meow',
                       (0, height - 50), font, 1.8, (255, 255, 255), 5)

    """_summary_
    rectangle
        image = cv.rectangle(frame, (0, 0), (200, 400), (0, 255, 0), 5)
    
    fill - nếu như thickness = -1
        image = cv.rectangle(frame, (0, 0), (200, 400), (0, 255, 0), 5)
        
    circle(frame, center, radius, color, thickness)
        center: tâm đường tròn
        radius: bán kính đường tròn

    text
        Syntax: cv.putText(img, text, org, fontFace, fontScale, color, thickness)
        
        font = cv.FONT_HERSHEY_COMPLEX # set font
        image = cv.putText(frame, 'Meow meow meow',
                       (0, height - 50), font, 1.8, (255, 255, 255), 5)
        
           'Meow meow meow': text will be display
           (0, height - 50): tọa độ hiển thị
            1.8: cỡ chữ        
    """
    # resize / small = 50% frame ban đầu
    small_frame = cv.resize(frame, (0, 0), fx=.7, fy=.7)

    # show img
    cv.imshow('My Capture', small_frame)

    # waiting key / 1s
    if (cv.waitKey(1) == ord('q')):
        break

# exit camera
capture.release()

# close window
cv.destroyAllWindows()
