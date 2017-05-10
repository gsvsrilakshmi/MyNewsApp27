class Parent():
	def _init_(self,last_name,eye_color):
		print("Parent Constructor Called")
		self.last_name = last_name
		self.eye_color = eye_color

	def show_info(self):
		print("LastName = "+self.last_name)
		print("Eye Color = "+self.eye_color)

class Child(Parent):
	def _init_(self,last_name,eye_color,number_of_toys):
		print("Child Constructor Called")
		Parent._init_(self,last_name,eye_color)
		self.number_of_toys = number_of_toys

	def show_info(self):
		print("LastName = "+self.last_name)
		print("Eye Color = "+self.eye_color)
		print("Number of toys = "+str(self.number_of_toys))

parent_instance = Parent("Gottumukkala", "black")
#parent_instance.show_info()
#print(parent_instance.last_name)

child_instance = Child("Gottumukkla","black",5)
child_instance.show_info()
# print(child_instance.last_name)
# print(child_instance.number_of_toys)