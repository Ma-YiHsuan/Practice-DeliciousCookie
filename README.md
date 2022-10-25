# 個人練習-好吃的餅乾

### 練習初衷
 - 搭建一個與參考頁面同樣的網頁。
 - 練習 CSS 動畫功能。
 - 捲軸滾動時，畫面中圖片跟著上下移動。
 - 搭建簡易輪播功能。
 - 以 SCSS 及 CSS 的單位選擇，完成 RWD 的建構。

### 參考頁面
**[FruOats(日本餅乾網站)](https://shop.fruoats.jp/)**

*僅參考網頁排版與設計作為應徵作品使用，無其他商業之用途。*

## 圖片與文字跑馬燈

### 目的
 - 利用 CSS 寫出與參考網頁一樣的跑馬燈效果。
### 技術使用
 - CSS keyframes / CSS animation
 - 參考資料：
   - https://ithelp.ithome.com.tw/articles/10268962
   - https://youtu.be/3T4rD_P2nc8
 
 **檔案位置：** sass/_utils.scss 、 sass/_header.scss

## 圖片移動隨著卷軸互動

### 目的
 - 以 JavaScript 寫出跟參考網頁同樣的互動效果。
### 技術使用
 - 監聽 window scroll 事件。
 - 以 Vue watch 以及 **[tween.js](https://github.com/tweenjs/tween.js/)** 完成動態效果。
 
**檔案位置：** js/scrollPic.js

## 輪播

### 目的
 - 使用 Vue 和 Vue transition 功能寫出簡易輪播功能。
### 技術使用
 - Vue transition 搭配 CSS 完成切換動態。
 - 監聽 window resize事件，讓輪播的樣式在小螢幕時有不同的呈現。
 
**檔案位置：** js/carousel.js

## 導覽列

### 目的
 - 導覽列下捲時都固定於頁面最上方。
 - RWD，小視窗時導覽列選單縮合為漢堡按鈕。
### 技術使用
 - CSS position 將導覽列固定於頁面上方。
 - 監聽 window resize 事件，讓視窗變小時，切換成漢堡按鈕。
 - 以 Vue transition 和 **[Animate.css](https://animate.style/)** 達成點選漢堡按鈕後，選單由左側拉出。
 
## 其他
 - 使用CSS / SCSS完成RWD設置。
 - 使用ES6 Module串接各component的JS檔案。
