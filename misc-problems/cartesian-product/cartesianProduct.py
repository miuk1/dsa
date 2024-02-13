def cartesian_product(*args):
    if not args:
        return
    if len(args) == 1:
        for i in args[0]:
            yield (i,)
    else:
        for i in args[0]:
            for j in cartesian_product(*args[1:]):
                yield (i,) + j
 

if __name__ == '__main__':
    for i in cartesian_product([1, 2, 3], [4, 5], [6, 7]):
        print(i)