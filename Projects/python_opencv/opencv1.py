import cv2 as cv

"""_summary_
    imread(pathname, flag)
    flag: 
        1: trả về ảnh màu, bỏ qua Alpha (độ trong suốt)  
        0: trả về ảnh đen trắng
        -1: trả về ảnh màu, có Alpha (độ trong suốt)  
    
    cv.imshow(winname, mat)
    cv.imshow('My image', img)
    """

# reading image
# img = cv.imread('D:\Coding\Python\Learning\Self\opencv\img\love.jpg', 1) #full path

# reading image => from D:\Coding\Python>
img = cv.imread('Learning/Self/opencv/img/love.jpg', 1)

# resize image
# img = cv.resize(img, (440, 700))  # width, height (set value)


# resize image / theo % image ban đầu, fx = width, fy = height (0 -> 1 <=> 0% -> 100%)
img = cv.resize(img, (0, 0), fx=.5, fy=.5)

# resize window
# cv.namedWindow('image', cv.WINDOW_NORMAL)
# cv.resizeWindow('image', 440, 700)


# rotate image
img = cv.rotate(img, cv.ROTATE_90_COUNTERCLOCKWISE)
"""_summary_
    cv.ROTATE_180: 180deg
    cv.ROTATE_90_CLOCKWISE: 90deg / theo chiều kim đồng hồ
    cv.ROTATE_90_COUNTERCLOCKWISE: 90deg / ngược chiều kim đồng hồ

    """

# show image
cv.imshow('image', img)

# wating
key = cv.waitKey(0)

"""_summary_
    #########################
    => waitKey()
    | Nếu k có dl gì => return -1
    key = cv.waitKey()
    print(key) # -1
    
    | Nếu có 0 => return code ASCII của key pressed
    cv.waitKey(0)
    #  press A => 97
    
    | Nếu có dl là ms => như timer or sleep
    cv.waitKey(3000)  # sleep 3s
    #wating 3s and code below running
    print('Meow')
    
    #########################
    => ord() / convert to ASCII
    print(ord('a'))  # 97
"""

# wating pressed key is k => save image to new image
if key == ord('s'):
    # create new image
    # cv.imwrite('newImage.jpg', img)
    cv.imwrite('Learning/Self/opencv/img/newImage.jpg', img)  # spectify path

    print('Created new image')

# destroy window
cv.destroyAllWindows()
