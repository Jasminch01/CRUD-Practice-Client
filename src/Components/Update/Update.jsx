import { useLoaderData } from "react-router-dom";

const Update = () => {
  const lodedUser = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const userUadate = { name, email };
    console.log(userUadate);

    fetch(`http://localhost:5000/users/${lodedUser._id}`, {
      method: "PUT",

      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(userUadate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount >0) {
            alert('users updated successfully')
            form.reset()
        }
      });
  };

  return (
    <div>
      <h1> Update information of the: {lodedUser.name}</h1>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" defaultValue={lodedUser?.name} />
        <br />
        <input type="email" name="email" defaultValue={lodedUser?.email} />
        <br />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default Update;
