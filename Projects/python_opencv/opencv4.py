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

    # draw a line
    # top left => bottom right
    image = cv.line(frame, (0, 0), (width, height), (0, 0, 255), 5)

    # bottom left => top right
    image = cv.line(frame, (0, height), (width, 0), (0, 0, 255), 5)

    """_summary_
    cv.line(frame, pt1, pt2, color)
        pt1: điểm bắt đầu, thickness
        pt2: điểm kết thúc
        color: RGB
        thickness: number, int...
        
        
    #############################################
    cv.line(frame, (0, 0), (width, height), (0, 0, 255), 5)
    
    (0, 0): điểm bắt đầu
    (width, height): điểm kết thúc
    (0, 0, 255): RGB
    5: thickness
    
    #############################################
    (top left, bottom left), (bottom right, top right)
    
    #############################################
    (0, height), (width, 0) <=> (0, 1024), (576, 0)
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
