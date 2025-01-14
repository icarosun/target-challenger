def verify_in_fibonnacci(num):
    value_a = 5 * num * num + 4
    value_b = 5 * num * num - 4

    raiz_a = pow(value_a, 1 / 2)
    raiz_b = pow(value_b, 1 / 2)

    if (raiz_a - int(raiz_a) == 0 or raiz_b - int(raiz_b) == 0):
        return True
    
    return False

num = int(input())
print(verify_in_fibonnacci(num))


