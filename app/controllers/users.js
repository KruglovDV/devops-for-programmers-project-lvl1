import User from '../entities/User.js';

export const index = async (_request, response) => {
  const users = await User.find();
  console.log(users);

  response.render({ users });
};

export const build = (_request, response) => {
  const user = new User();
  response.render({ user });
};

export const create = async (request, response, { router }) => {
  const user = new User(request.body.user);

  try {
    await user.validate();
    await user.save();
    response.redirectTo(router.route('users'));
    request.flash('success', 'User successfully created');
  } catch (e) {
    console.log(request.body);
    console.log(e);
    console.log(user.email);
    request.flash('danger', 'Something went wrong on creating new user');
    response.render({ user }, 'build');
  }
};
