import turtle

def draw_square(some_turtle):
	for i in range(0,4):
		some_turtle.forward(100)
		some_turtle.right(90)

def draw_shapes() :
	window = turtle.Screen()
	window.bgcolor("red")

	brad = turtle.Turtle()
	brad.shape("turtle")
	brad.color("yellow")
	brad.speed(2)

	for i in range(1,37):
		draw_square(brad)
		brad.right(10)

	# angie = turtle.Turtle()
	# angie.shape("arrow")
	# angie.color("blue")

	# angie.circle(100)

	# angus = turtle.Turtle()
	# angus.shape("arrow")
	# angus.color("white")

	# angus.forward(100) 
 #    angus.left(120)
 #    angus.forward(100)
 #    angus.left(120)
 #    angus.forward(100)

	window.exitonclick()

draw_shapes()