Задание 3 — реализовать алгоритм работы «умного дома»

yarn install
yarn start 

результат работы алгоритма лежит в data/output.json

--------------------------------

0 шаг - читаем входной файл input.json

из data/input.json

1 шаг - создадим заготовку объекта содержащего пока пустое расписание работы приборов.

{
  "0": [0, "night", 1.79],
  "1": [1, "night", 1.79],
  "2": [2, "night", 1.79],
  "3": [3, "night", 1.79],
  "4": [4, "night", 1.79],
  "5": [5, "night", 1.79],
  "6": [6, "night", 1.79],
  "7": [7, "day", 6.46],
  "8": [8, "day", 6.46],
  "9": [9, "day", 6.46],
  "10": [10, "day", 5.38],
  "11": [11, "day", 5.38],
  "12": [12, "day", 5.38],
  "13": [13, "day", 5.38],
  "14": [14, "day", 5.38],
  "15": [15, "day", 5.38],
  "16": [16, "day", 5.38],
  "17": [17, "day", 6.46],
  "18": [18, "day", 6.46],
  "19": [19, "day", 6.46],
  "20": [20, "day", 6.46],
  "21": [21, "night", 5.38],
  "22": [22, "night", 5.38],
  "23": [23, "night", 1.79]
}

2 шаг - В расписании пометим часы в которых приборам разрешено/запрещено работать.

{
  "0": [0, "night", 1.79, "allow", "deny", "allow", "allow", "allow"],
  "1": [1, "night", 1.79, "allow", "deny", "allow", "allow", "allow"],
  "2": [2, "night", 1.79, "allow", "deny", "allow", "allow", "allow"],
  "3": [3, "night", 1.79, "allow", "deny", "allow", "allow", "allow"],
  "4": [4, "night", 1.79, "allow", "deny", "allow", "allow", "allow"],
  "5": [5, "night", 1.79, "allow", "deny", "allow", "allow", "allow"],
  "6": [6, "night", 1.79, "allow", "deny", "allow", "allow", "allow"],
  "7": [7, "day", 6.46, "deny", "allow", "allow", "allow", "allow"],
  "8": [8, "day", 6.46, "deny", "allow", "allow", "allow", "allow"],
  "9": [9, "day", 6.46, "deny", "allow", "allow", "allow", "allow"],
  "10": [10, "day", 5.38, "deny", "allow", "allow", "allow", "allow"],
  "11": [11, "day", 5.38, "deny", "allow", "allow", "allow", "allow"],
  "12": [12, "day", 5.38, "deny", "allow", "allow", "allow", "allow"],
  "13": [13, "day", 5.38, "deny", "allow", "allow", "allow", "allow"],
  "14": [14, "day", 5.38, "deny", "allow", "allow", "allow", "allow"],
  "15": [15, "day", 5.38, "deny", "allow", "allow", "allow", "allow"],
  "16": [16, "day", 5.38, "deny", "allow", "allow", "allow", "allow"],
  "17": [17, "day", 6.46, "deny", "allow", "allow", "allow", "allow"],
  "18": [18, "day", 6.46, "deny", "allow", "allow", "allow", "allow"],
  "19": [19, "day", 6.46, "deny", "allow", "allow", "allow", "allow"],
  "20": [20, "day", 6.46, "deny", "allow", "allow", "allow", "allow"],
  "21": [21, "night", 5.38, "allow", "deny", "allow", "allow", "allow"],
  "22": [22, "night", 5.38, "allow", "deny", "allow", "allow", "allow"],
  "23": [23, "night", 1.79, "allow", "deny", "allow", "allow", "allow"]
}

3 шаг - Получим все возможные значения часов начала работы и суммарный rate для каждого варианта.

[
  {"0": 5.37, "1": 5.37, "2": 5.37, "3": 5.37, ... и. тд.},
  {"7": 12.92, "8": 12.92, "9": 11.84, "10": 10.76, ... и. тд.},
  {"0": 107.95, "1": 107.96, "2": 107.96, "3": 107.96, ... и. тд.},
  {"0": 107.95, "1": 107.96, "2": 107.96, "3": 107.96, ... и. тд.},
  {"0": 1.79, "1": 1.79, "2": 1.79, "3": 1.79, ... и. тд.}
]

4 шаг - Получим все варианты суммарной стоимости суточной работы каждого прибора.

{
  "0": [{"0": "5.1015"}, {"1": "5.1015"}, {"2": "5.1015"}, {"3": "5.1015"}, ... и. тд.],
  "1": [{"13": "21.5200"}, {"10": "21.5200"}, {"11": "21.5200"}, {"12": "21.5200"}, ... и. тд.],
  "2": [{"12": "5.3980"}, {"0": "5.3980"}, {"2": "5.3980"}, {"3": "5.3980"}, ... и. тд.],
  "3": [{"12": "5.3980"}, {"0": "5.3980"}, {"2": "5.3980"}, {"3": "5.3980"}, ... и. тд.],
  "4": [{"0": "1.5215"}, {"23": "1.5215"}, {"2": "1.5215"}, {"3": "1.5215"}, ... и. тд.]
}

5 шаг - Составим и проверим расписание

[
  {
    "0": [0, 950, 3, 5.1015, "Посудомоечная машина", "F972B82BA56A70CC579945773B6866FB"],
    "1": [13, 2000, 2, 21.52, "Духовка", "C515D887EDBBE669B2FDAC62F571E9E9"],
    "2": [12, 50, 24, 5.398, "Холодильник", "02DDD23A85DADDD71198305330CC386D"],
    "3": [12, 50, 24, 5.398, "Термостат", "1E6276CC231716FE8EE8BC908486D41E"],
    "4": [0, 850, 1, 1.5215, "Кондиционер", "7D9DC84AD110500D284B33C82FE6E85E"]
  },
  {
    "0": [950, "deny", 50, 50, 850],
    "1": [950, "deny", 50, 50, "allow"],
    "2": [950, "deny", 50, 50, "allow"],
    "3": ["allow", "deny", 50, 50, "allow"],
    "4": ["allow", "deny", 50, 50, "allow"],
    "5": ["allow", "deny", 50, 50, "allow"],
    "6": ["allow", "deny", 50, 50, "allow"],
    "7": ["deny", "allow", 50, 50, "allow"],
    "8": ["deny", "allow", 50, 50, "allow"],
    "9": ["deny", "allow", 50, 50, "allow"],
    "10": ["deny", "allow", 50, 50, "allow"],
    "11": ["deny", "allow", 50, 50, "allow"],
    "12": ["deny", "allow", 50, 50, "allow"],
    "13": ["deny", 2000, 50, 50, "allow"],
    "14": ["deny", 2000, 50, 50, "allow"],
    "15": ["deny", "allow", 50, 50, "allow"],
    "16": ["deny", "allow", 50, 50, "allow"],
    "17": ["deny", "allow", 50, 50, "allow"],
    "18": ["deny", "allow", 50, 50, "allow"],
    "19": ["deny", "allow", 50, 50, "allow"],
    "20": ["deny", "allow", 50, 50, "allow"],
    "21": ["allow", "deny", 50, 50, "allow"],
    "22": ["allow", "deny", 50, 50, "allow"],
    "23": ["allow", "deny", 50, 50, "allow"]
  }
]

6 шаг - Окончательно оформим расписание

см. data/output.json

7 шаг - записываем результат в output.json

