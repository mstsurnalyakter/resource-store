import { Typography } from "@material-tailwind/react";
import DynamicTitle from "../../components/DynamicTitle";
import code from "/code.jfif";

const CodeExplanationBlog = () => {
  return (
    <div className="pl-10">
      <header className="">
        <DynamicTitle pageTitle="Blog Details" />
        <div className="h-[350px]">
          <img src={code} alt="" className="w-full h-full" />
        </div>
      </header>

      <div className="shadow-md dark:bg-gray-300  border space-y-5 mx-auto px-8 py-8 lg:py-10 lg:px-10">
        <h2 className="text-4xl font-medium">
          Job Portal Project Code Explanation
        </h2>
        <div className="space-y-5">
          <h3 className="text-xl font-medium mb-2">Introduction:</h3>
          <Typography variant="small ">
            Attention all web developers! Are you ready to embark on an exciting
            journey to build a cutting-edge job-seeking website? In this
            comprehensive guide, we'll delve into the intricacies of creating a
            user-friendly platform where users can seamlessly explore job
            opportunities, post listings, and apply for positions. From setting
            up the environment to implementing advanced features, we'll cover it
            all to help you craft a standout project for your portfolio.
          </Typography>

          <ol className="list-decimal">
            <li>
              <h3 className="text-lg font-medium mb-2">
                Setting Up the Development Environment:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  Initialize a new project directory and set up a Node.js
                  project.
                </li>
                <li>
                  Install Express.js and MongoDB Cors Dotenv for server-side
                  development
                </li>
                <li>Create React App for the client-side development.</li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2 mt-2">
                Designing a Visually Appealing Interface:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  Focus on color contrast, alignment, and spacing for a pleasing
                  visual experience.
                </li>
                <li>
                  Customize design components to enhance the uniqueness of the
                  website.
                </li>
                <li>
                  Explore component libraries and design inspirations to create
                  a captivating layout.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2 mt-2">
                {" "}
                Implementing Authentication and Authorization:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  Set up user authentication and registration systems with
                  relevant error handling.
                </li>
                <li>
                  Ensure private routes maintain user sessions without
                  redirecting to the login page.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2 mt-2">
                Building Core Features:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  Design a navbar and footer for consistent navigation across
                  pages.
                </li>
                <li>
                  Implement navigation links for home, job listings, user
                  profile, and more.
                </li>
                <li>
                  Create dynamic sections such as a banner, job categories with
                  tabs, and explore sections.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2 mt-2">
                Enhancing User Experience:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  Develop interactive features like tooltips and modals for a
                  seamless user interaction.
                </li>
                <li>
                  Display relevant notifications and toast messages for CRUD
                  operations and error handling.
                </li>
                <li>
                  Utilize React Router for client-side routing and conditional
                  rendering based on user authentication.
                </li>
              </ul>
            </li>

            <li>
              <h3 className="text-lg font-medium mb-2 mt-2">
                Managing Job Listings:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  Create forms for adding, updating, and deleting job listings
                  with MongoDB.
                </li>
                <li>
                  Implement private routes for users to manage their own job
                  postings.
                </li>
                <li>
                  Enable searching and filtering functionalities for job
                  listings based on category and title.
                </li>
              </ul>
            </li>

            <li>
              <h3 className="text-lg font-medium mb-2 mt-2">
                Facilitating Job Applications:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  Design a private route for viewing detailed job descriptions
                  and application forms.
                </li>
                <li>
                  Implement validations to prevent applications after the
                  deadline and duplicate submissions.
                </li>
                <li>
                  Utilize MongoDB to store job applications and update
                  application counts dynamically.
                </li>
              </ul>
            </li>

            <li>
              <h3 className="text-lg font-medium mb-2 mt-2">
                Additional Features and Challenges:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  Explore optional tasks such as theme toggling, pagination, and
                  dynamic website titles.
                </li>
                <li>
                  Implement challenging tasks like Tanstack query for data
                  fetching and JWT for route protection.
                </li>
                <li>
                  Ensure code readability and maintainability with meaningful
                  component names and folder structures.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default CodeExplanationBlog