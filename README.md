<p align="center">
  <img width="200px" alt="Project Backend With Nodejs Logo" title="Project Backend With Nodejs Logo" src=".github/nodejs-logo-vector.svg" />
  
  <h1 align="center">Project Backend with Nodejs</h1>

  <!-- <p align="center">
    🔗 <a href="https://URLThisProject.com">https://URLThisProject.com</a> 🔗
  </p>   -->

We have developed the backend in Node.js to create a task API with the following functionalities:

- Task Creation:

  - Route: POST - /tasks
  - Type: POST
  - Description: You can create a new task in the database by sending the title and description fields in the request body. When
    creating a task, the fields id, created_at, updated_at, and completed_at are automatically filled.

- Task Listing:

  - Route: GET - /tasks
  - Type: GET
  - Description: You can list all tasks saved in the database. Additionally, you can perform a search by filtering tasks based on title and description.

- Task Update:

  - Route: PUT - /tasks/:id
  - Type: PUT
  - Description: You can update a task by its id. In the request body, you can send only the title and/or description for updating. If you send only one of them, the other will not be updated. Before updating, we perform validation to check if the id belongs to an existing task in the database.

- Task Deletion:

  - Route: DELETE - /tasks/:id
  - Type: DELETE
  - Description: You can remove a task by its id. Before performing the removal, we verify if the id belongs to an existing task in the database.

- Task Completion Status:
  - Route: PATCH - /tasks/:id/complete
  - Type: PATCH
  - Description: You can mark a task as complete or revert it to the "normal" state using the id. Before making the change, we perform validation to check if the id belongs to an existing task in the database.

Additionally, we provide the ability to import tasks in bulk through a CSV file.

The structure of each task includes the following fields:

- id: Unique identifier for the task.
- title: Task title.
- description: Detailed description of the task.
- completed_at: Completion date of the task (initially set to null).
- created_at: Creation date of the task.
- updated_at: Date of the last update to the task.

This backend was developed in Node.js to meet your task management needs with a robust API and the ability to import tasks in bulk from CSV files.

</p>

## 🧭 Table of contents

- [🧭 Table of contents](#-table-of-contents)
- [💡 Technologies Used](#-technologies-used)
- [🚀 Running the Project](#-running-the-project)
  - [Back-end](#back-end)
- [📝 Routes](#-routes)
- [🌎 License](#-license)
- [✒ Author](#-author)

<!-- ## 🎥 Implementation Video

In the GitHub edit, drag the video that it already puts on github itself. -->

<!-- ## 🎨 Layout

Layout developed by [Name](https://www.instagram.com/urlName/)

[![Layout in Figma](https://github.com/VagnerNerves/default-readme/blob/main/assets/layout-in-figma.svg)](https://www.figma.com/files) -->

<!-- ## 👏 Learning and more Implementations

Describe what you learned and implemented in the project. -->

## 💡 Technologies Used

- [x] [Nodejs](https://nodejs.org/en)
- [x] [csv-parse](https://csv.js.org/parse/)

<!-- ## 📂 Folder Structure

```plainText
app
.
├── __tests__
├── android                     # Native android files
├── ios                         # Native ios files
├── src                         # Source files
│   ├── @types                  # Contains all global definitions of types and interfaces
│   ├── assets                  # Contains Js bundles assets. e.g: icons, splash, images etc...
│   ├── components              # Contains all global react components
│   ├── context                 # All contexts
│   ├── constants               # Constants files
│   ├── hooks                   # Cstomized hooks
│   ├── navigation
│   ├── screens
│   ├── services                # Contains external and api services
│   ├── App                     # Aplication entry
.
.
├── index                       # Bundle entry
.
.
└── README.md
``` -->

## 🚀 Running the Project

### Back-end

Clone the project

```bash
  git clone https://github.com/VagnerNerves/nodejs-fundamentals-challenge-ignitenode.git
```

Enter the project directory

```bash
  cd nodejs-fundamentals-challenge-ignitenode
```

Install with dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

<!-- ### Front-end Web

Clone the project

```bash
  git clone https://link-para-o-projeto
```

Enter the project directory

```bash
  cd my-project
```

Install with dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

### Mobile

Clone the project

```bash
  git clone https://link-para-o-projeto
```

Enter the project directory

```bash
  cd my-project
```

Install with dependencies

```bash
  npm install
```

Start the server

```bash
  npx expo start
```

- IOS:

```bash
  npx pod-install && npx react-native run-ios
```

- Android:

```bash
  npx react-native run-android
``` -->

## 📝 Routes

<!-- [![Run in Postman](https://github.com/VagnerNerves/default-readme/blob/main/assets/run-in-postman.svg)](https://app.getpostman.com/run-collection/link) -->

[![Run in Insomnia](https://github.com/VagnerNerves/default-readme/blob/main/assets/run-in-insomnia.svg)](https://insomnia.rest/run?label=Nodejs%20Fundamentals%20Challenge&uri=https%3A%2F%2Fgithub.com%2FVagnerNerves%2Fnodejs-fundamentals-challenge-ignitenode%2Fblob%2Fmain%2F.github%2FInsomnia_2023-09-05_Project_nodejs_fundamentals-challenge.json)

## 🌎 License

This project is under the MIT license. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more details.

## ✒ Author

<p align="center">
  <img width="200px" alt="Author Vagner Nerves" title="Author Vagner Nerves" src="https://github.com/VagnerNerves/default-readme/blob/main/assets/VagnerNerves.svg" />

  <h3 align="center">Vagner Nerves</h3>
  
  <p align="center">  
    Made with love and hate 😅, get in touch!
  </p>
</p>  
  
<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-1f6feb?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vagnernervessantos/)](https://www.linkedin.com/in/vagnernervessantos/)
[![Gmail Badge](https://img.shields.io/badge/-vagnernervessantos@gmail.com-1f6feb?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vagnernervessantos@gmail.com)](mailto:vagnernervessantos@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-GitHub-1f6feb?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/VagnerNerves)](https://github.com/VagnerNerves)

</div>
