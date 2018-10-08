---
next: /stdlib.md
---

# 语言核心

## 一、基本概念

- 注释
- ASCII码表 - 转义字符
- 翻译阶段
- 标识符、作用域、生存期
- 查找与名称空间
- 类型、算术类型
- 对象与对齐
- main函数
- AS-if规则
- 未定义行为
- 内存模型与数据竞争

## 二、关键字

## 三、预处理器

- #if、#ifdef、#ifndef
- #define、#、# #
- #include、#pragma
- #line、#error

## 四、语句

- if、switch
- for
- while、do-while
- continue、break
- goto、return

## 五、表达式

- 值类别
- 求值顺序与定序
- 常量及字面量
    - 整数常量
    - 浮点常量
    - 字符常量
    - 字符串字面量
    - 复合字面量
- 常量表达式
- 隐式转换
- 运算符
    - 成员访问与间接
    - 逻辑、比较
    - 算术、赋值
    - 自增减
    - 调用、逗号、三元
    - sizeof、Alignof(C11)
    - 转型运算符
- 运算符优先级
- 泛型选择(C11)

## 六、初始化

- 标量
- 数组
- 结构体、联合体

## 七、声明

- 指针、数组
- 枚举
- 存储期与链接
- const、volatile、restrict(C99)
- struct、union、位域
- _Alignas(C11)、typeof
- _Static_assert(C11)
- 原子类型(C11)
- 外部及试探性定义

## 八、函数

- 函数声明
- 函数定义
- inline(C99)、_Noreturn(C11)
- 可变参数

## 九、杂项

- 一致性
- 内联汇编
- 可分析性(C11)