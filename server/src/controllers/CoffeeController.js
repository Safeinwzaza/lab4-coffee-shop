// src/controllers/CoffeeController.js
module.exports = {
    // ดูรายการกาแฟทั้งหมด
    index (req, res) {
        res.send('เรียกดูรายการกาแฟทั้งหมด (Menu)')
    },

    // เพิ่มเมนูกาแฟใหม่
    create (req, res) {
        // รับข้อมูล JSON เมนูกาแฟจากหน้าบ้าน
        res.send('สร้างเมนูกาแฟ: ' + JSON.stringify(req.body))
    },

    // แก้ไขข้อมูลกาแฟ (เช่น ปรับราคา)
    put (req, res) {
        res.send('แก้ไขกาแฟ ID: ' + req.params.coffeeId + ' ข้อมูล: ' + JSON.stringify(req.body))
    },

    // ลบเมนูกาแฟ
    remove (req, res) {
        res.send('ลบกาแฟ ID: ' + req.params.coffeeId)
    },

  // ดูรายละเอียดกาแฟ 1 รายการ
    show (req, res) {
        res.send('ดูข้อมูลกาแฟ ID: ' + req.params.coffeeId)
    }
}
    