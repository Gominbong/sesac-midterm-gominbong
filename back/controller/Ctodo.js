const { where } = require("sequelize");
const { Todo } = require("../models/index");

/* Todos 전체 목록 불러오기 */
exports.readAll = async (req, res) => {
  const findAll = await Todo.findAll();
  res.send(findAll);
};

/* Todo 한 개 불러오기 */
exports.readOne = async (req, res) => {
  const { id } = req.params;
  const findOne = await Todo.findOne({
    where: { id },
  });
  if (findOne == null) {
    res.send("없음");
  } else {
    res.send(findOne);
  }
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {
  const { title, done } = req.body;

  const newTodo = await Todo.create({
    title,
    done,
  });
  res.send("생성됨");
};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {
  const { id, done } = req.params;

  const updateTodo = await Todo.update(
    { done },
    {
      where: { id: id },
    }
  );
  res.send("업데이트됨");
};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {
  const { id } = req.params;
  const deleteTodo = await Todo.destroy({
    where: {
      id,
    },
  });
  res.send("삭제됨");
};
