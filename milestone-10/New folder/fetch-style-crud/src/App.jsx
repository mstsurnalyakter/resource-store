import Swal from "sweetalert2";
import useComments from "./hooks/useComments";
import Card from "./components/Card";
import MoonLoader from "react-spinners/MoonLoader";

function App() {

  const { comments ,isLoading,refetch} = useComments()

  const handleAddComments = event =>{
    event.preventDefault();
    const form = event.target;
    const commentField = form.commentField.value;
    // console.log(comment);

    fetch(`http://localhost:5000/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ commentField }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
           Swal.fire({
             title: "Success!",
             text: "Comment Added Successfully",
             icon: "success",
             confirmButtonText: "Cool",
           });
           refetch();
           form.reset();
        }

      })
      .catch((error) => console.error(error));
  }

  const handleDelete = (_id) =>{
    // fetch(`http://localhost:5000/comments/${_id}`, {
    //   method: "DELETE",
    // })
    // .then((res) => res.json())
    // .then(data=>{
    //   console.log(data);
    //   if (data.acknowledged) {
    //     refetch();
    //   }
    // })
    // .catch(error=>console.error(error))

    // console.log(_id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/comments/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Card has been deleted.",
                  icon: "success",
                });
                refetch()
              }
            })
            .catch((error) => console.error(error));


        }
      });



  }

  if (isLoading) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <MoonLoader color="#36d7b7" />
      </div>
    );
  }




  return (
    <div className="mt-10 relative  space-y-5 container min-h-screen  mx-auto flex flex-col">
      <div>
        <div className="space-y-3 flex-grow">
          <h1 className="font-extrabold text-3xl">Opinion Board</h1>
          <p>Share opinions Anonymously</p>
          <div className="border-b-2 "></div>
        </div>

        <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 gap-1">
          {/* comment container */}
          <div className="flex gap-5 lg:col-span-3 ">
            {comments?.length &&
              comments.map((comment) => (
                <Card
                  handleDelete={handleDelete}
                  key={comment._id}
                  comment={comment}
                />
              ))}
          </div>
          <h3 className="flex justify-end font-bold text-2xl">
            Recent Comment
          </h3>
        </div>
      </div>

      <div className="absolute bottom-20 w-full mx-auto mb-4">
        <form onSubmit={handleAddComments} className="flex  items-center">
          <textarea
            placeholder="Comment"
            name="commentField"
            className="textarea flex-grow textarea-bordered textarea-lg "
          ></textarea>
          <button className="btn btn-success py-4 ">
            {" "}
            <input type="submit" value="Add comment" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App
