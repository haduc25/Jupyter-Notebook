from math import sqrt
import time
import os


# bai 1.1
def soChanHoacSoLe():
    x = float(input('Nhập 1 số bất kỳ: '))
    if (x % 2 == 0):
        print(f'{x} là số chẵn')
    else:
        print(f'{x} là số lẻ')


# bai 1.2
def soAmHoacSoDuong():
    x = float(input('Nhập 1 số bất kỳ: '))
    if (x >= 0):
        print(f'{x} là số dương')
    else:
        print(f'{x} là số âm')


# bai 1.3 / ax + b = 0
def tinhPtBacNhat():
    a = float(input("Nhập số a: "))
    b = float(input("Nhập số b: "))
    if a == 0:
        if b == 0:
            print("Vô số nghiệm")
        else:
            print("Vô nghiệm")
    else:
        print("Phương trình có nghiệm x =", -b / a)


# bai 1.4
def laNamNhuan(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False


def hienThiNamNhuan():
    year = int(input('Nhập số năm: '))
    if laNamNhuan(year):
        print(year, "là năm nhuận")
    else:
        print(year, "không phải là năm nhuận")


# bai 1.5, 1.6
def tinhPtBacHai():
    a = float(input("Nhập a: "))
    b = float(input("Nhập b: "))
    c = float(input("Nhập c: "))

    delta = b**2 - 4*a*c

    if delta < 0:
        print("Phương trình vô nghiệm")
    elif delta == 0:
        x = -b / (2*a)
        print("Phương trình có nghiệm kép x = ", x)
    else:
        x1 = (-b + sqrt(delta)) / (2*a)
        x2 = (-b - sqrt(delta)) / (2*a)
        print("Phương trình có hai nghiệm phân biệt:")
        print("x1 = ", x1)
        print("x2 = ", x2)


# bai 1.7
def laTamGiac():
    a = float(input("Nhập cạnh a: "))
    b = float(input("Nhập cạnh b: "))
    c = float(input("Nhập cạnh c: "))

    if a <= 0 or b <= 0 or c <= 0:
        print("Không tạo thành tam giác.")
    elif a + b <= c or a + c <= b or b + c <= a:
        print("Không tạo thành tam giác.")
    else:
        print("Tạo thành tam giác.")


# bai 1.8
def soLonNhat():
    a = float(input("Nhập số a: "))
    b = float(input("Nhập số b: "))

    # # case 1:
    # if (a > b):
    #     print(f'A={a} lớn hơn B={b}')
    #     return
    # print(f'B={b} lớn hơn A={a}')

    # case 2
    if (a > b):
        print(f'A={a} lớn hơn B={b}')
    elif (a == b):
        print(f'A={a} bằng B={b}')
    else:
        print(f'B={b} lớn hơn A={a}')


# bai 1.9
def soChanHoacSoLe2():
    x = int(input('Nhập 1 số bất kỳ: '))
    if (x % 2 == 0):
        print(f'{x} là số chẵn')
    else:
        print(f'{x} là số lẻ')


# bai 1.10
def timSoLonNhat():
    a = float(input("Nhập a: "))
    b = float(input("Nhập b: "))
    c = float(input("Nhập c: "))

    # case 1
    if a >= b and a >= c:
        print("Số lớn nhất là A=", a)
    elif b >= a and b >= c:
        print("Số lớn nhất là B=", b)
    else:
        print("Số lớn nhất là C=", c)

    # case 2
    max_value = max(a, b, c)
    print("Số lớn nhất là:", max_value)


# bai 1.11
def kiemTraNamNhuanVaDayMonthYear():
    # Nhập ngày, tháng, năm từ bàn phím
    day = int(input("Nhập ngày: "))
    month = int(input("Nhập tháng: "))
    year = int(input("Nhập năm: "))

    # Kiểm tra năm nhuận
    if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
        laNamNhuan = True
    else:
        laNamNhuan = False

    # Kiểm tra ngày, tháng, năm hợp lệ
    if year > 0 and 1 <= month <= 12:
        if month == 2:
            if laNamNhuan:
                max_day = 29
            else:
                max_day = 28
        elif month in [4, 6, 9, 11]:
            max_day = 30
        else:
            max_day = 31

        if 1 <= day <= max_day:
            print("Ngày, tháng, năm hợp lệ.")
        else:
            print("Ngày không hợp lệ.")
    else:
        print("Năm không hợp lệ.")


# bai 1.12
def snt(n):
    if n < 2 or (n > 2 and n % 2 == 0):
        return False
    for i in range(3, int(sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True


def printSnt():
    print('Các số nguyên tố từ 1 đến 100 là:')
    for i in range(1, 101):
        if snt(i):
            print(i, end=' ')


# bai 1.13
def tongNguyenDuongN(x):
    tong = 0
    for i in range(1, x + 1):
        # print(i)
        tong += i
    return tong


def printSoNguyenDuongN():
    while (True):
        x = int(input('Nhập số nguyên dương: '))
        if (x < 0):
            print('Số vừa nhập không hợp lệ!')
        else:
            break
    print(f'Tổng {x} số nguyên dương đầu tiên là: {tongNguyenDuongN(x)}')


# bai 1.14
def tinhTongCacPtTrongMang(arr):
    tong = 0
    for i in range(len(arr)):
        # print(arr[i])
        tong += arr[i]

    print(f'Tổng các phần tử trong mảng là: {tong}')


# bai 1.15
def demSoChan(arr):
    dem = 0
    for i in arr:
        if (i % 2) == 0:
            dem += 1
    print(f'Tổng số lượng số chẵn trong mảng là: {dem}')


# bai 1.16
def soLonNhatTrongMang(arr):
    # case 1
    max_value = arr[0]
    for i in arr:
        if (i > max_value):
            max_value = i
    print(f'_Số lớn nhất trong mảng: {max_value}')

    # case 2
    print(f'Số lớn nhất trong mảng: {max(arr)}')


# bai 1.17
def soNhoNhatTrongMang(arr):
    # case 1
    min_value = arr[0]
    for i in arr:
        if (i < min_value):
            min_value = i
    print(f'_Số nhỏ nhất trong mảng: {min_value}')

    # case 2
    print(f'Số nhỏ nhất trong mảng: {min(arr)}')
    return min_value


# bai 1.18
def tinhTongCacPtMang2Chieu(mat):
    tong = 0

    for i in range(len(mat)):
        for j in range(len(mat[i])):
            tong += mat[i][j]

    print("Tổng các phần tử trong mảng 2 chiều là:", tong)


# bai 1.19
def demSoChanMang2Chieu(mat):
    soChan = 0
    for i in range(len(mat)):
        for j in range(len(mat[i])):
            if matrix[i][j] % 2 == 0:
                soChan = soChan + 1

    print("Số lượng phần tử chẵn trong mảng 2 chiều là:", soChan)


# bai 1.20
def demSoLeMang2Chieu(mat):
    soLe = 0
    for i in range(len(mat)):
        for j in range(len(mat[i])):
            if matrix[i][j] % 2 != 0:
                soLe = soLe + 1

    print("Số lượng phần tử lẻ trong mảng 2 chiều là:", soLe)


# bai 1.21
def soLonNhatTrongMang2Chieu(mat):
    max_value = mat[0][0]
    for i in range(len(mat)):
        for j in range(len(mat[i])):
            if matrix[i][j] > max_value:
                max_value = matrix[i][j]

    print("Số lớn nhất trong mảng 2 chiều là: ", max_value)


# bai 1.22
def soNhoNhatTrongMang2Chieu(mat):
    min_value = mat[0][0]
    for i in range(len(mat)):
        for j in range(len(mat[i])):
            if matrix[i][j] < min_value:
                min_value = matrix[i][j]

    print("Số nhỏ nhất trong mảng 2 chiều là: ", min_value)


# bai 1.23
def handleNhapDuLieuVaoMang():
    arr = []
    n = int(input("Nhập số lượng phần tử của mảng: "))

    for i in range(n):
        # Yêu cầu nhập giá trị của phần tử thứ i
        value = int(input(f"Nhập pt thứ [{i}]: "))

        # Thêm giá trị của phần tử vào mảng
        arr.append(value)

    # loading, clear console
    for i in range(5):
        print('.' * i, end='\r')
        time.sleep(0.5)
    os.system('cls')
    print('*'*25)

    # print array
    print("Mảng vừa nhập là:", arr, end='\n\n')

    # calc
    tinhTongCacPtTrongMang(arr)
    demSoChan(arr)
    soLonNhatTrongMang(arr)
    soNhoNhatTrongMang(arr)


def handleNhapDuLieuVaoMaTran():
    m = int(input("Nhập số hàng của ma trận: "))
    n = int(input("Nhập số cột của ma trận: "))
    matrix = []

    for i in range(m):
        hang = []
        for j in range(n):
            value = int(input(f"Nhập pt thứ [{i}][{j}]: "))
            hang.append(value)

        # Thêm vào ma trận
        matrix.append(hang)

    # loading, clear console
    for i in range(5):
        print('.' * i, end='\r')
        time.sleep(0.5)
    os.system('cls')
    print('*'*25)

    # print array
    print("Ma trận vừa nhập là:")
    for hang in matrix:
        print(hang)
    print('\n')

    # calc
    tinhTongCacPtMang2Chieu(matrix)
    demSoChanMang2Chieu(matrix)
    demSoLeMang2Chieu(matrix)
    soLonNhatTrongMang2Chieu(matrix)
    soNhoNhatTrongMang2Chieu(matrix)


def mainApp():
    handleNhapDuLieuVaoMang()
    print('\n\n')
    print('*'*25)
    handleNhapDuLieuVaoMaTran()


###############################################################################
# ============== main ==============#
# soChanHoacSoLe()
# soAmHoacSoDuong()
# tinhPtBacNhat()
# hienThiNamNhuan()
# tinhPtBacHai()
# laTamGiac()
# soLonNhat()
# soChanHoacSoLe2()
# timSoLonNhat()
# kiemTraNamNhuanVaDayMonthYear()
# printSnt()  # 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
# printSoNguyenDuongN()

# array
arr = [1, 5, 2, 11, 6]
# tinhTongCacPtTrongMang(arr)  # 25
# demSoChan(arr)  # 2
# soLonNhatTrongMang(arr)  # 11
# soNhoNhatTrongMang(arr)  # 1

# matrix
matrix = [[13, 5, 7], [2, 4, 34], [4, 6, 1]]

# tinhTongCacPtMang2Chieu(matrix)  # 76
# demSoChanMang2Chieu(matrix)  # 5
# demSoLeMang2Chieu(matrix)  # 4
# soLonNhatTrongMang2Chieu(matrix)  # 34
# soNhoNhatTrongMang2Chieu(matrix)  # 1


# bai tap 1.23
mainApp()
