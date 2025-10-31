---
title: Hello World!
published: 2025-10-31
description: 'This is a sentence of hello world'
image: 'https://github.com/qinghaili142857/picx-images-hosting/raw/master/u=3254080819,1391684220&fm=253&fmt=auto&app=138&f=JPEG.6bhhchnjzp.webp'
tags: [Start]
category: 'Start'
draft: false 
lang: 'Content'
---

# Hello World!
The followings are my first program:
```c
#include<stdio.h>

int board[9][9]={{5,3,4,6,7,8,9,1,2},
				{6,7,2,1,9,5,3,4,8},
				{1,9,8,3,4,2,5,6,7},
				{8,5,9,7,6,1,4,2,3},
				{4,2,6,8,5,3,7,9,1},
				{7,1,3,9,2,4,8,5,6},
				{9,6,1,5,3,7,2,8,4},
				{2,8,7,4,1,9,6,3,5},
				{3,4,5,2,8,6,1,7,9}};

int main()
{
	printf("|-----------------------|\n");
	for(int i=0;i<=8;i++){
		printf("|");
		for(int j=0;j<=6;j+=3){
			printf(" %d %d %d |",board[i][j],board[i][j+1],board[i][j+2]);
		}
		printf("\n");
		if((i+1)%3==0){
			printf("|-----------------------|\n");
		}
	}
	return 0;
}
```