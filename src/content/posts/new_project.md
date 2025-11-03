---
title: new_project
published: 2025-11-03
description: 'This is a record of project finished by 1016'
image: 'https://github.com/qinghaili142857/picx-images-hosting/raw/master/u=3254080819,1391684220&fm=253&fmt=auto&app=138&f=JPEG.6bhhchnjzp.webp'
tags: [coding;program]
category: 'project'
draft: false 
lang: 'Content'
---

## <center>程序设计第二次上机项目

Code:
```c
#include <stdio.h>
#include <string.h>

#define N 5
#define M 20

int cnt = 0;

struct Student {
    int id[N];
    char name[N][M];
    double pscj[N];
    double qmcj[N];
} stu;

void menu(void)
{
	printf("=================================================\n");
	printf("=              欢迎使用成绩管理系统             =\n");
	printf("=           1=录入学生     2=显示信息           =\n");
	printf("=           3=排序总评     4=查找学生           =\n");
	printf("=           5=插入学生     6=删除学生           =\n");
	printf("=           7=统计人数     0=退出               =\n");
	printf("=================================================\n");
	printf("请选择：");
}

int checkId(int xh) {
    for (int i = 0; i < cnt; i++) {
        if (stu.id[i] == xh) return 1;
    }
    return 0;
}

void add() {
    char c = 'y';
    while (c == 'y' || c == 'Y') {
        if (cnt >= N) {
            printf("人数已达5人上限，无法再输入！\n");
            break;
        }
        printf("您选择了1=录入学生\n");
        int xh;
        printf("请输入学号（1-40之间）：");
        scanf("%d", &xh);
        while (xh < 1 || xh > 40 || checkId(xh)) {
            printf("\n输入学号有误或重复，请重新输入：");
            scanf("%d", &xh);
        }
        stu.id[cnt] = xh;
        
        printf("请输入姓名：");
        scanf("%s", stu.name[cnt]);
        
        printf("请输入平时成绩（0-100之间）：");
        scanf("%lf", &stu.pscj[cnt]);
        while (stu.pscj[cnt] < 0 || stu.pscj[cnt] > 100) {
        	printf("输入错误，成绩应在0到100之间！\n");
            printf("请输入平时成绩（0-100之间）：");
            scanf("%lf", &stu.pscj[cnt]);
        }
        
        printf("请输入期末成绩（0-100之间）：");
        scanf("%lf", &stu.qmcj[cnt]);
        while (stu.qmcj[cnt] < 0 || stu.qmcj[cnt] > 100) {
        	printf("输入错误，成绩应在0到100之间！\n");
            printf("请输入期末成绩（0-100之间）：");
            scanf("%lf", &stu.qmcj[cnt]);
        }
        
        cnt++;
        
        if (cnt < N) {
            printf("继续输入学生数据请按y或Y：");
            scanf(" %c", &c);
        } else {
            printf("人数已达5人上限，无法再输入！\n");
            break;
        }
    }
}

void show() {
    printf("您选择了2=显示信息\n");
    printf("学号\t姓名\t平时\t期末\n");
    for (int i = 0; i < cnt; i++) {
        printf("%d\t%s\t%.1f\t%.1f\n", stu.id[i], stu.name[i], stu.pscj[i], stu.qmcj[i]);
    }
}

void sort() {
    printf("您选择了3=排序总评\n");
    for (int i = 0; i < cnt - 1; i++) {
        for (int j = 0; j < cnt - i - 1; j++) {
            double z1 = stu.pscj[j] * 0.5 + stu.qmcj[j] * 0.5;
            double z2 = stu.pscj[j + 1] * 0.5 + stu.qmcj[j + 1] * 0.5;
            if (z1 < z2) {
                int t1 = stu.id[j];
                stu.id[j] = stu.id[j + 1];
                stu.id[j + 1] = t1;
                
                char t2[M];
                strcpy(t2, stu.name[j]);
                strcpy(stu.name[j], stu.name[j + 1]);
                strcpy(stu.name[j + 1], t2);
                
                double t3 = stu.pscj[j];
                stu.pscj[j] = stu.pscj[j + 1];
                stu.pscj[j + 1] = t3;
                
                t3 = stu.qmcj[j];
                stu.qmcj[j] = stu.qmcj[j + 1];
                stu.qmcj[j + 1] = t3;
            }
        }
    }
    show();
}

void find() {
    char c = 'y';
    while (c == 'y' || c == 'Y') {
        printf("您选择了4=查找学生\n");
        printf("请输入学号：");
        int xh;
        scanf("%d", &xh);
        
        int found = 0;
        for (int i = 0; i < cnt; i++) {
            if (stu.id[i] == xh) {
                printf("学号 姓名 平时 期末\n");
                printf("%d %s %.1f %.1f\n", stu.id[i], stu.name[i], stu.pscj[i], stu.qmcj[i]);
                found = 1;
                break;
            }
        }
        
        if (!found) printf("找不到该学生！\n");
        
        printf("继续查找？(y/n)：");
        scanf(" %c", &c);
    }
}

void insert() {
    if (cnt >= N) {
        printf("人数已满！\n");
        return;
    }
    add();
}

void del() {
    char c = 'y';
    while (c == 'y' || c == 'Y') {
        printf("您选择了6=删除学生\n");
        printf("请输入学号：");
        int xh;
        scanf("%d", &xh);
        
        if (xh < 1 || xh > 40) {
            printf("学号错误！\n");
        } else {
            int found = 0;
            for (int i = 0; i < cnt; i++) {
                if (stu.id[i] == xh) {
                    for (int j = i; j < cnt - 1; j++) {
                        stu.id[j] = stu.id[j + 1];
                        strcpy(stu.name[j], stu.name[j + 1]);
                        stu.pscj[j] = stu.pscj[j + 1];
                        stu.qmcj[j] = stu.qmcj[j + 1];
                    }
                    cnt--;
                    printf("删除成功！\n");
                    found = 1;
                    break;
                }
            }
            if (!found) printf("找不到该学生！\n");
        }
        
        printf("继续删除？(y/n)：");
        scanf(" %c", &c);
    }
}

void stat() {
    printf("您选择了7=统计人数\n");
    int a = 0, b = 0, c = 0, d = 0, e = 0;
    
    for (int i = 0; i < cnt; i++) {
        double z = stu.pscj[i] * 0.5 + stu.qmcj[i] * 0.5;
        if (z >= 90) a++;
        else if (z >= 80) b++;
        else if (z >= 70) c++;
        else if (z >= 60) d++;
        else e++;
    }
    
    printf("90-100\t80-89\t70-79\t60-69\t<60\n");
    printf("%-6d\t%-5d\t%-5d\t%-5d\t%-3d\n", a, b, c, d, e);
}

int main() {
    int x;
    while (1) {
        menu();
        scanf("%d", &x);
        switch (x) {
            case 1: add(); break;
            case 2: show(); break;
            case 3: sort(); break;
            case 4: find(); break;
            case 5: insert(); break;
            case 6: del(); break;
            case 7: stat(); break;
            case 0: return 0;
            default: printf("输入错误！\n");
        }
    }
    return 0;
}
```
欢迎交流。