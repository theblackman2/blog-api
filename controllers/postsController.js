const getAll = (req, res) => {
  res.send(allPosts);
};

const getOne = (req, res) => {
  const id = req.params.id;
  if (!id)
    res.status(400).json({
      type: "Error",
      message: "You must provide an id for this route",
    });

  const foundPost = allPosts.find((post) => post.id === parseInt(id));
  if (!foundPost) {
    res.status(404).json({
      type: "Error",
      message: "The post you request doesn't exists",
    });
    return;
  }
  res.send(foundPost);
};

module.exports = { getAll, getOne };
