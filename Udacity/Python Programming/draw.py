import turtle

def draw_square(some_turtle):
    for i in range(1,5):
        some_turtle.forward(100)
        some_turtle.right(90)

def draw_art():
    window = turtle.Screen()
    window.bgcolor("red")
    
    steve = turtle.Turtle()
    steve.shape("turtle")
    steve.color("blue")
    steve.speed(2)
    for i in range(1,37):
        draw_square(steve)
        steve.right(10)   

    #jess = turtle.Turtle()
    #jess.shape("arrow")
    #jess.color("yellow")
    #jess.circle(100)
    
    window.exitonclick()
draw_art()
