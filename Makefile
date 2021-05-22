@echo off
echo Building Node.js

run:
	node make.js
	@echo Built Node.JS

runJava:
	cd ./src/API/modules/java/
	javac Main.java
	java Main.java

runPython:
	cd ./src/API/modules/python
	python main.py

# UNVERIFIED: I DONT CODE IN C++ BUT IF SOMEONE WANTS TO CHANGE THIS...
run_cpp_gpp:
	CC = gcc
	CFLAGS = -c -Wall
	TARGET = ./src/API/modules/cpp
	all: $(TARGET)
	$(TARGET): $(TARGET).c
		$(CC) $(CFLAGS) -o $(TARGET) $(TARGET).c
run_c:
	cd ./src/API/modules/c
	gcc -c main.c
