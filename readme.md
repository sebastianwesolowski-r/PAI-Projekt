#### Creating new user:

Request body JSON required params: name, email and password After registering and deleting user an welcome/ farewell message will be sent to the provided email using SendGrid

#### [](https://github.com/sebastianwesolowski-r/task-manager-API#creating-new-task)Creating new task:

Request body JSON required params: description, completed(boolean)

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#post-create-user-)POST Create User: [![#FFFF00](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)

/users

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#post-add-user-avatar-)POST Add User Avatar: [![#FFFF00](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)

/users/me/avatar

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#post-login-)POST Login: [![#FFFF00](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)

/users/login

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#post-logout-)POST Logout: [![#FFFF00](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)

/users/logout

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#post-logout-from-all-sessions-)POST Logout From All Sessions: [![#FFFF00](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)

/users/logoutAll

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#post-create-task-)POST Create Task: [![#FFFF00](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)](https://camo.githubusercontent.com/c176d7c960c2ca0c4a5e91f8e36f84ea718f14b7fff3502e1a572e51b85be4ef/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646464630302f4646464630302e706e67)

/tasks

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#get-get-profile-)GET Get Profile: [![#c5f015](https://camo.githubusercontent.com/87792de2fb5e6a5990671a0e00833605cf93d1fba4c37f2e9cf81049a9bd38f5/68747470733a2f2f706c616365686f6c642e636f2f31357831352f6335663031352f6335663031352e706e67)](https://camo.githubusercontent.com/87792de2fb5e6a5990671a0e00833605cf93d1fba4c37f2e9cf81049a9bd38f5/68747470733a2f2f706c616365686f6c642e636f2f31357831352f6335663031352f6335663031352e706e67)

/users/me

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#get-get-user-tasks-)GET Get User Tasks: [![#c5f015](https://camo.githubusercontent.com/87792de2fb5e6a5990671a0e00833605cf93d1fba4c37f2e9cf81049a9bd38f5/68747470733a2f2f706c616365686f6c642e636f2f31357831352f6335663031352f6335663031352e706e67)](https://camo.githubusercontent.com/87792de2fb5e6a5990671a0e00833605cf93d1fba4c37f2e9cf81049a9bd38f5/68747470733a2f2f706c616365686f6c642e636f2f31357831352f6335663031352f6335663031352e706e67)

/tasks?sortBy={fieldName} + :{asc/desc}, completed, limit, skip

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#patch-update-user-credentials-)PATCH Update User Credentials: [![#808080](https://camo.githubusercontent.com/e97c4b3ffafadb988962528956a3d5eb7ba5610e18be52ca9b01d4a45af7c1cb/68747470733a2f2f706c616365686f6c642e636f2f31357831352f3830383038302f3830383038302e706e67)](https://camo.githubusercontent.com/e97c4b3ffafadb988962528956a3d5eb7ba5610e18be52ca9b01d4a45af7c1cb/68747470733a2f2f706c616365686f6c642e636f2f31357831352f3830383038302f3830383038302e706e67)

/users/me

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#patch-update-task-)PATCH Update Task: [![#808080](https://camo.githubusercontent.com/e97c4b3ffafadb988962528956a3d5eb7ba5610e18be52ca9b01d4a45af7c1cb/68747470733a2f2f706c616365686f6c642e636f2f31357831352f3830383038302f3830383038302e706e67)](https://camo.githubusercontent.com/e97c4b3ffafadb988962528956a3d5eb7ba5610e18be52ca9b01d4a45af7c1cb/68747470733a2f2f706c616365686f6c642e636f2f31357831352f3830383038302f3830383038302e706e67)

/tasks/{task_id}

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#delete-delete-user-)DELETE Delete User: [![#FF0000](https://camo.githubusercontent.com/ae335b2292ebc36ee35efafff8587ad0a1034e10ae245a45d9becf1fb23da2fe/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646303030302f4646303030302e706e67)](https://camo.githubusercontent.com/ae335b2292ebc36ee35efafff8587ad0a1034e10ae245a45d9becf1fb23da2fe/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646303030302f4646303030302e706e67)

/users/me

##### [](https://github.com/sebastianwesolowski-r/task-manager-API#delete-delete-task-)DELETE Delete Task: [![#FF0000](https://camo.githubusercontent.com/ae335b2292ebc36ee35efafff8587ad0a1034e10ae245a45d9becf1fb23da2fe/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646303030302f4646303030302e706e67)](https://camo.githubusercontent.com/ae335b2292ebc36ee35efafff8587ad0a1034e10ae245a45d9becf1fb23da2fe/68747470733a2f2f706c616365686f6c642e636f2f31357831352f4646303030302f4646303030302e706e67)

/tasks/{task_id}
