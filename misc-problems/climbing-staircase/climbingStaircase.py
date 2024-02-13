# Given a staircase of n steps, you can climb 1 or 2 steps at a time. Find the number of ways to climb the staircase.

def climbing_staircase(n):
    num_of_steps = [1, 2]
    for i in range(2, n):
        num_of_steps.append(num_of_steps[i - 1] + num_of_steps[i - 2])

    return num_of_steps[n - 1]    

if __name__ == "__main__":
    print(climbing_staircase(4)) # 5
    print(climbing_staircase(5)) # 8
    print(climbing_staircase(10)) # 89