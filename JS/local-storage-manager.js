let tasks = [];

const loadTasksToStorage = () => {
	// Loads the tasks to localStorage
	let serializedTasks = JSON.stringify(tasks);
	localStorage.setItem("tasks", serializedTasks);
};

export const createTaskObject = (
	taskTitle,
	taskDescription,
	taskDeadline,
	taskImportance,
	status,
) => {
	// Creates task's object and loads it to localStorage
	const task = {
		title: taskTitle,
		description: taskDescription,
		deadline: taskDeadline,
		importance: taskImportance,
		status: status,
	};

	tasks.push(task);
	loadTasksToStorage();
};

export const returnTasksFromStorage = () => {
	// Returns the tasks from localStorage
	try {
		const storedData = localStorage.getItem("tasks");
		return storedData ? JSON.parse(storedData) : [];
	} catch (e) {
		console.error("Error parsing tasks:", e);
		return [];
	}
};

export const getTaskInfo = (taskIndex) => {
	// Retruns the data of specific task 
	return tasks[taskIndex];
};

export const editTasksStatus = (tasksIndices) => {
	// Changes status of the provided tasks to "completed"
	for (const index of tasksIndices) {
		tasks[index].status = "completed";
	}
	loadTasksToStorage(tasks);
};

export const editTaskInfo = (
	taskIndex,
	taskTitle,
	taskDescription,
	taskDeadline,
	taskImportance,
) => {
	// Edits task information
	tasks[taskIndex].title = taskTitle;
	tasks[taskIndex].description = taskDescription;
	tasks[taskIndex].deadline = taskDeadline;
	tasks[taskIndex].importance = taskImportance;

	loadTasksToStorage(tasks);
};

export const removeTasksFromStorage = (tasksIndices) => {
	// Removes tasks from the localStorage by the given indices 
	tasksIndices.sort((a, b) => b - a);
	for (const index of tasksIndices) {
		tasks.splice(index, 1);
	}
	loadTasksToStorage();
};

window.addEventListener("load", () => {
	tasks = returnTasksFromStorage();
});
