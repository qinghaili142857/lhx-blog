---
title: "线性代数期中复习笔记"
description: "linear algebra"
pubDate: "Oct 14 2025"
image: https://tc.alcy.cc/q/20250908/303d0bead3d7552f5340c03b9ce374a5.webp
categories:
  - notebook
tags:
  - linear algebra
---
# 1 行列式
## 1.1 n阶行列式的定义
>$n$阶行列式是由$n^2$个数，排成$n$行、$n$列的算式

$$
D = \begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix} = a_{11}A_{11} + a_{12}A_{12} + \cdots + a_{1n}A_{1n}
$$
记为$det(a_{ij})$，其中$A_{1j} = (-1) ^{1 + j}M_{ij}，j = 1,2,...,n$

$$
D_n = \begin{vmatrix}
a_{11} & 0 & \cdots & 0 \\
a_{21} & a_{22} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix} = a_{11}a_{22} \cdots a_{nn}
$$
**注意到部分上（下）三角行列式有如下性质：**


$$
D_n = \begin{vmatrix}
a_{11} & 0 & \cdots & 0 \\
a_{21} & a_{22} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix} = a_{11}a_{22}\cdots a_{nn}
$$


$$
D_n = \begin{vmatrix}
0 & \cdots & 0 & a_{1n} \\
0 & \cdots & a_{2,n-1} & a_{2n} \\
\vdots & \ddots & \vdots & \vdots \\
a_{n1} & \cdots & a_{n,n-1} & a_{nn}
\end{vmatrix} = (-1)^{\frac{n(n-1)}{2}} a_{1n}a_{2,n-1} \cdots a_{n1}
$$

$$
\begin{vmatrix}
d_1 & 0 & \cdots & 0 \\
0 & d_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & d_n
\end{vmatrix} = d_1d_2 \cdots d_n;
$$

$$
\begin{vmatrix}
0 & \cdots & 0 & d_1 \\
0 & \cdots & d_2 & 0 \\
\vdots & \ddots & \vdots & \vdots \\
d_n & \cdots & 0 & 0
\end{vmatrix} = (-1)^{\frac{n(n-1)}{2}} d_1d_2 \cdots d_n.
$$
## 1.2 行列式的性质

**性质1**：行列式与它的转置行列式**相等**，即$D^T = D$

**性质2**：互换行列式任意两行（列）的位置，行列式的值**反号**

**性质3**：行列式$D$等于它的任一行（列）各元素分别与其对应的代数余子式的乘积之和

**推论1**： 若行列式$D$的某行元素全为零，则$D = 0$

**性质4**： 行列式的某一行（列）中所有的元素都乘以同一数$k$等于用数$k$乘此行列式

**性质5**：若行列式的某一行（列）的元素都是两数之和，则此行列式可以写成两个行列式的和

**性质6**： 若行列式有两行（列）对应元素相等，则此行列式为零

**推论2**：若行列式中有两行（列）成比例，则行列式为零

**性质7**：行列式的某一行（列）乘以同一数后加到另一行（列），行列式不变

**性质8**：**行列式的任一行（列）各元素与另一行（列）对应元素的代数余子式乘积之和等于零**
****

# 3 几何向量及其应用
## 3.3 平面和空间直线
### 3.3.1 平面方程
#### 平面的点法式方程
$$
M_0 (x_0,y_0,z_0)
$$
**法线向量** 
$\vec{n} = (A, B, C)$
设平面上任一点为$M(x,y,z)$
则有$\vec{M_0M} \perp \vec{n} \Rightarrow \vec{M_0M} \cdot \vec{n} = 0$
即 **$A(x-x_0) + B(y - y_0) + C(z - z_0) = 0$**

![点法式](https://github.com/lnscq/picx-images-hosting/raw/master/image.2vf4walwek.webp)

#### 平面的一般式方程

由平面的点法式方程
$$
A(x-x_0) + B(y - y_0) + C(z - z_0) = 0 \\
\Rightarrow Ax + By + Cz - (Ax_0 + By_0 + Cz_0) = 0 
$$

其中 $Ax_0 + By_0 + Cz_0 = D$

得到平面的一般式方程:

$$
Ax + By + Cz + D = 0 
$$

法向量 $\vec{n} = (A ,B, C)$

##### **一般式方程的几种特殊情况**
$ Ax + By + Cz + D = 0 $

(1) $ D = 0 $，平面通过坐标原点；

(2) $ A = 0 $，
$$
\begin{cases}
D = 0，& \text{平面通过x轴；} \\
D \neq 0，& \text{平面平行于x轴；}
\end{cases}
$$
类似地可讨论 $ B = 0 $，$ C = 0 $ 情形。

(3) $ A = B = 0 $，平面平行于$xoy$坐标面（即垂直于$Z$轴）；
类似地可讨论 $ A = C = 0 $，$ B = C = 0 $ 情形。

#### 平面的截距式方程

设平面在x, y, z三轴上分别有截距 $OA = a, OB = b, OC = c$，（其中$a, b, c$，均为非零常数，求此平面方程。

设平面为 $Ax + By + Cz + D = 0$，

由已知，平面过点$(a, 0, 0), (0, b, 0), (0, 0, c)$

有
$$
\begin{cases}
aA + D = 0, \\
bB + D = 0, \\
cC + D = 0,
\end{cases}
$$
$\Rightarrow A = -\frac{D}{a}, B = -\frac{D}{b}, C = -\frac{D}{c}.$

代入所设方程得
$$
\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1（截距式方程）
$$

#### 平面的参数式方程

设平面$π$过点 $ P_0(x_0, y_0, z_0) $，且已知$π$上两个不共线的向量
$\vec{a} = (L_1, M_1, N_1), \vec{b} = (L_2, M_2, N_2)$，求此平面方程。

设平面上任一点为 $ P(x, y, z) $

则存在唯一的一组实数 $ s, t $，使得
$$
\overrightarrow{P_0P} = s\vec{a} + t\vec{b} \quad \text{或} \quad \vec{r} = \vec{r_0} + s\vec{a} + t\vec{b}
$$

$$
\begin{cases}
x = x_0 + sL_1 + tL_2 \\
y = y_0 + sM_1 + tM_2 \\
z = z_0 + sN_1 + tN_2
\end{cases}
$$

![参数式方程](https://github.com/lnscq/picx-images-hosting/raw/master/image.3k8egbm2us.webp)

### 3.3.2 两平面位置关系

**定义：** 两平面法向量之间的夹角称为两平面的夹角

#### 平面夹角计算

设平面 $\Pi_1$ 和 $\Pi_2$ 的方程分别为：
$$
 \Pi_1: A_1x + B_1y + C_1z + D_1 = 0, \\
 \Pi_2: A_2x + B_2y + C_2z + D_2 = 0, 
$$

对应的法向量为：
$$
 \vec{n}_1 = (A_1, B_1, C_1), \\
 \vec{n}_2 = (A_2, B_2, C_2), 
$$

平面夹角 $\theta$ 的余弦值为：
$$ \cos\theta = \frac{|A_1A_2 + B_1B_2 + C_1C_2|}{\sqrt{A_1^2 + B_1^2 + C_1^2} \cdot \sqrt{A_2^2 + B_2^2 + C_2^2}} $$

#### 平面位置关系

1. $\Pi_1 \perp \Pi_2 \Leftrightarrow \vec{n}_1 \perp \vec{n}_2 \Leftrightarrow A_1A_2 + B_1B_2 + C_1C_2 = 0;$
2. $\Pi_1 \parallel \Pi_2 \Leftrightarrow \vec{n}_1 \parallel \vec{n}_2 \Leftrightarrow A_1:B_1:C_1 = A_2:B_2:C_2$

#### 两平面位置关系

1. $\Pi_1$ 与 $\Pi_2$ 相交 $\Leftrightarrow \vec{n}_1$ 与 $\vec{n}_2$ 不平行
   $ \Leftrightarrow A_1:B_1:C_1 \neq A_2:B_2:C_2 $
2. $\Pi_1$ 与 $\Pi_2$ 平行而不重合 $\Leftrightarrow \frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2} \neq \frac{D_1}{D_2}$
3. $\Pi_1$ 与 $\Pi_2$ 重合 $\Leftrightarrow \frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2} = \frac{D_1}{D_2}$

### **3.3.3 直线方程**
#### 直线的对称式方程

>过一点且与一已知非零向量平行的直线式唯一确定的

![对称式方程](https://github.com/lnscq/picx-images-hosting/raw/master/image.102k4wsqgv.webp)

**方向向量**：与直线平行的非零向量

设$M_0 =(x_0,y_0,z_0),\vec{s} = (l,m,n),$
$M (x,y,z)$为直线上任一点
则有
$$
\vec{M_0M} \parallel \vec{s}
$$
即
$$
\frac{x-x_0}{l} = \frac{y-y_0}{m} = \frac{z-z_0}{n}（直线的对称式方程）
$$

#### 直线的参数方程
$$
\frac{x-x_0}{l} = \frac{y-y_0}{m} = \frac{z-z_0}{n}（直线的对称式方程）
$$
令
$$
\frac{x-x_0}{l} = \frac{y-y_0}{m} = \frac{z-z_0}{n} = t
$$
得
$$
\begin{cases}
x = x_0 + lt \\
y = y_0 + mt \quad 直线的参数方程\\ 
z = z_0 + nt 
\end{cases}
$$
#### 直线的一般式方程
![一般方程](https://github.com/lnscq/picx-images-hosting/raw/master/image.70aq9nbvuf.webp)

如果两平面
$$
\Pi_1: A_1x + B_1y + C_1z + D_1 = 0 \\
\Pi_2: A_2x + B_2y + C_2z + D_2 = 0
$$
不平行，则其交线是一条直线:
**空间直线的一般式方程**
$$
\begin{cases}
 A_1x + B_1y + C_1z + D_1 = 0 \\
 A_2x + B_2y + C_2z + D_2 = 0
\end{cases}
$$
其**方向向量**为：
$$
\vec{s} = \vec{n_1} \times \vec{n_2} = (A_1,B_1,C_1) \times (A_2,B_2,C_2)
$$

#### **两条直线的位置关系**

**定义：两直线的方向向量的夹角称为这两条直线的夹角（一般取锐角）。**

直线 $ L_1 : \frac{x - x_1}{l_1} = \frac{y - y_1}{m_1} = \frac{z - z_1}{n_1} $  
直线 $ L_2 : \frac{x - x_2}{l_2} = \frac{y - y_2}{m_2} = \frac{z - z_2}{n_2} $

$$
\cos \theta = \frac{| l_1 l_2 + m_1 m_2 + n_1 n_2 |}{\sqrt{ l_1^2 + m_1^2 + n_1^2 } \cdot \sqrt{ l_2^2 + m_2^2 + n_2^2 }}
$$

**特别地：**

- (1) $ L_1 \perp L_2 \iff l_1 l_2 + m_1 m_2 + n_1 n_2 = 0 $
- (2) $ L_1 \parallel L_2 \iff (l_1, m_1, n_1) \parallel (l_2, m_2, n_2) $

---
##### **两直线的位置关系：**
![](https://github.com/lnscq/picx-images-hosting/raw/master/image.6pnwgi50db.webp)
- (1) $ L_1 $ 与 $ L_2 $ 异面  
  $\iff$ 三向量 $ \overrightarrow{P_1 P_2}, \vec{s}_1, \vec{s}_2 $ 不共面。

- (2) $ L_1 $ 与 $ L_2 $ 相交于一点  
  $\iff$ 三向量 $ \overrightarrow{P_1 P_2}, \vec{s}_1, \vec{s}_2 $ 共面，且 $ \vec{s}_1 \nparallel \vec{s}_2 $。

- (3) $ L_1 $ 与 $ L_2 $ 平行而不重合  
  $\iff$ $ \vec{s}_1 \parallel \vec{s}_2 $，且 $ \overrightarrow{P_1 P_2} \nparallel \vec{s}_1 $。

- (4) $ L_1$ 与 $ L_2 $ 重合  
  $\iff$ $ \vec{s}_1 \parallel \vec{s}_2 \parallel \overrightarrow{P_1 P_2} $。

总结：$ L_1 $ 与 $ L_2 $ 共面  
$\iff$ 三个向量 $ \overrightarrow{P_1 P_2}, \vec{s}_1, \vec{s}_2 $ 共面

$$
\begin{vmatrix}
x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\
l_1 & m_1 & n_1 \\
l_2 & m_2 & n_2
\end{vmatrix} = 0
$$