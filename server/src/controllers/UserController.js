// src/controllers/UserController.js
module.exports = {
  // get all users
  index (req, res) {
res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด (Get all users)')
  },

  // create user
  create (req, res) {
    // ในบทที่ 4 เรา test แค่ส่ง string แต่รอบนี้เราจะรับ JSON
    res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
  },

  // edit user
  put (req, res) {
    res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
  },

  // delete user
  remove (req, res) {
    res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId)
  },

  // get user by id
  show (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
  }
}
