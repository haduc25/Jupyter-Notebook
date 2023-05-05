import cv2 as cv
import random

# read img
img = cv.imread('Learning/Self/opencv/img/love.jpg', 1)
# img = cv.imread('Learning/Self/opencv/img/2.PNG', -1)

# resize img
img = cv.resize(img, (0, 0), fx=.5, fy=.5)


# array of image
print(img)

# type of image
print(type(img))  # <class 'numpy.ndarray'>

# xem chieu cao => shape
print(img.shape)  # (741, 412, 3), Chiều cao => hàng & chiều rộng => cột

"""_summary_
    #########################
    print(img.shape) 
    # (741, 412, 3), Chiều cao => hàng & chiều rộng => cột | (row, col, channel)
    741 - Chiều cao => hàng
    412 - chiều rộng => cột
    3 - kênh (chanel) => RGB, RGBA
    
    img = cv.imread('Learning/Self/opencv/img/love.jpg', 1) => chanel = RGB => 3
    img = cv.imread('Learning/Self/opencv/img/love.jpg', -1) => chanel = RGBA => 4
    """

################################################

# xuất dữ liệu của img theo index
print('#'*32)
# (1482, 824, 3)
# print(img[0])  # value of index 0
# print(img[1481])  # value of index 1481, because index from 0 - 1481


# overide a image
for i in range(100):
    # img.shape[1]: 1482 (row), img.shape[1]: 824 (col)
    for j in range(img.shape[1]):
        # pass
        # gán random color cho từng pixel
        # img[i][j] = [255, 255, 255]
        img[i][j] = [random.randint(0, 255), random.randint(
            0, 255), random.randint(0, 255)]  # [G, B, G]

    """_summary_
        In Python, the `pass` keyword is a placeholder statement that does nothing. It is often used as a placeholder in situations where the interpreter expects a statement, but you don't want to execute any code.
        def my_function():
            pass  # placeholder until we add code
    """

# select area image
areaSelected = img[0:400, 100:200]  # chọn vùng ảnh từ x=0->500, y=200->500
# gán lại vào image hiện tại, kiểu copy `areaSelected` xong lại paste vào ảnh hiện tại
img[300:700, 300:400] = areaSelected  # dán vào vị trí x=300->400, y=500->800


# show img
cv.imshow('My Crush', img)

# stop window
cv.waitKey()
