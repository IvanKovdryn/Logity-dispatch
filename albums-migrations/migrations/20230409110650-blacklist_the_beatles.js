module.exports = {
  async up(db, client) {
    await db
      .collection("contact-us")
      .updateMany({}, { $rename: { name: "fullName" } });
  },
  async down(db, client) {
    await db
      .collection("contact-us")
      .updateMany({}, { $rename: { fullName: "name" } });
  },
};
