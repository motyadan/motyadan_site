import tkinter as tk
from tkinter import messagebox

# Функция для обработки нажатий кнопок
def button_click(symbol):
    if symbol == "=":
        try:
            result = eval(entry.get())
            entry.delete(0, tk.END)
            entry.insert(tk.END, str(result))
        except Exception as e:
            messagebox.showerror("Ошибка", "Неверное выражение!")
    elif symbol == "C":
        entry.delete(0, tk.END)
    else:
        entry.insert(tk.END, symbol)

# Создание основного окна
root = tk.Tk()
root.title("Калькулятор")
root.geometry("300x400")
root.resizable(False, False)

# Поле ввода
entry = tk.Entry(root, font=("Arial", 20), justify="right")
entry.grid(row=0, column=0, columnspan=4, padx=5, pady=5, sticky="nsew")

# Кнопки калькулятора
buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
]

# Расположение кнопок
for i, btn in enumerate(buttons):
    row = i // 4 + 1
    col = i % 4
    tk.Button(
        root, text=btn, font=("Arial", 20),
        command=lambda b=btn: button_click(b)
    ).grid(row=row, column=col, padx=5, pady=5, sticky="nsew")

# Автоматическое масштабирование кнопок
for i in range(5):  # 4 строки кнопок + 1 строка для поля ввода
    root.grid_rowconfigure(i, weight=1)
for i in range(4):  # 4 столбца кнопок
    root.grid_columnconfigure(i, weight=1)

# Запуск основного цикла
root.mainloop()
