let allSwitchesElements = document.querySelectorAll(".task-selector__item");
export let tasksListBox = document.querySelector(".tasks-list");
export let selectedTaskCounterElement = document.querySelector(
	".selected-tasks-counter",
);

export let addTaskWindow = document.querySelector(".add-task__window");

export let shadow = document.querySelector(".shadow");

export let taskPreviewWindow = document.querySelector(".task-preview__window");

export let taskPreviewImportanceDiv = document.querySelector(
	".task-preview__importance",
);

export let taskManagmentPanelMain = document.querySelector(
	".task-managment-panel__main",
);

export let editTaskWindow = document.querySelector(".edit-task__window");

export let userGuidanceMessaage = document.querySelector(
	".user-guidance__message",
);

export const deactivateAllSwitches = () => {
	// Deactivates all switches and enables all of them to be activated again
	for (const switchElement of allSwitchesElements) {
		if (switchElement.firstElementChild.classList.contains("active")) {
			switchElement.firstElementChild.classList.remove("active");
			switchElement.firstElementChild.firstElementChild.classList.remove(
				"moved",
			);
		} else if (switchElement.firstElementChild.classList.contains("disabled")) {
			switchElement.firstElementChild.classList.remove("disabled");
		}
	}
};
export const hideCheckboxes = () => {
	// Hides all checkboxes
	let tasks = document.querySelectorAll(".tasks-list__element");
	tasks.forEach((element) => {
		let taskIcons = element.lastElementChild;
		if (
			taskIcons.lastElementChild.classList.contains(
				"tasks-list__element__icons__checkbox",
			)
		) {
			taskIcons.removeChild(taskIcons.lastElementChild);
		}
	});
};

export const hideUnnecessarySwitches = () => {
	//Hides unnecessary switches
	let switchesParent = allSwitchesElements[0].parentElement;
	for (let switcher of allSwitchesElements) {
		if (
			switcher.firstElementChild.classList.contains(
				"task-selector__item__button__important",
			)
		) {
			continue;
		} else {
			switcher.classList.add("checking");
		}
	}
	switchesParent.classList.add("checking");
};

export const showAllSwitches = () => {
	// Shows all switches if they some of them were hidden
	let switchesParent = allSwitchesElements[0].parentElement;
	for (let switcher of allSwitchesElements) {
		if (switcher.classList.length > 1) {
			switcher.classList.remove(
				switcher.classList[switcher.classList.length - 1],
			);
		}
	}
	if (switchesParent.classList.length > 1) {
		switchesParent.classList.remove(
			switchesParent.classList[switchesParent.classList.length - 1],
		);
	}
};

export const showCheckboxes = (tasksArray) => {
	//Creates the checkbox element within tasks
	tasksArray.forEach((element) => {
		let iconsBox = element.lastElementChild;
		let outerDiv = document.createElement("div");
		let innerDiv = document.createElement("div");
		let img = document.createElement("img");
		outerDiv.classList.add("tasks-list__element__icons__checkbox");
		innerDiv.classList.add("tasks-list__element__icons__checkbox__icon-box");
		img.classList.add("checkmark");
		img.setAttribute("src", "img/check.svg");
		img.setAttribute("alt", "");

		innerDiv.appendChild(img);
		outerDiv.appendChild(innerDiv);
		iconsBox.appendChild(outerDiv);
	});
};

export const taskListIsEmpty = (tasksArray, text) => {
	// Checks if provided list of tasks is empty. If so, displays given text
	if (tasksArray.length == 0) {
		let doesExist = document.querySelector(".tasks-list__empty");
		if (doesExist) {
			doesExist.textContent = `${text}`;
		} else {
			let p = document.createElement("p");
			p.textContent = `${text}`;
			p.classList.add("tasks-list__empty");
			p.classList.add("inter-normal");
			tasksListBox.appendChild(p);
		}
	} else {
		let emptyListParagraph = document.querySelector(".tasks-list__empty");
		if (emptyListParagraph) {
			tasksListBox.removeChild(emptyListParagraph);
		}
	}
};

export const showAndReturnAllTasks = () => {
	// Shows all the task and returns them
	let tasks = document.querySelectorAll(".tasks-list__element");

	tasks.forEach((task) => {
		if (task.style.display == "none") {
			task.style.display = "flex";
		}
	});
	return tasks;
};

export const countSelectedTasks = (tasksArray) => {
	// Counts selected task by checked checkboxes
	let selectedTaskCounter = 0;
	for (let task of tasksArray) {
		let checkboxImg =
			task.lastElementChild.lastElementChild.firstElementChild
				.firstElementChild;
		if (checkboxImg.classList.contains("checked")) {
			selectedTaskCounter += 1;
		}
	}
	selectedTaskCounterElement.textContent = `Selected tasks: ${selectedTaskCounter}`;
	selectedTaskCounterElement.style.padding = "0.5rem 0";
	return selectedTaskCounter
};

export const showAllTasksExceptCompleted = () => {
	// Shows all the tasks except these which are completed
	let tasks = document.querySelectorAll(".tasks-list__element");
	let tasksInProgress = [];
	for (const task of tasks) {
		if (!task.classList.contains("completed")) {
			task.style.display = "flex";
			tasksInProgress.push(task);
		} else {
			task.style.display = "none";
		}
	}
	return tasksInProgress;
};

export const setDate = (dateInput) => {
	// Sets the current date in provided input
	const now = new Date();
	const offset = now.getTimezoneOffset() * 60000;
	const localISODate = new Date(now - offset).toISOString().split("T")[0];
	dateInput.value = localISODate;
	dateInput.setAttribute("min", localISODate);
};

export const isDateValid = (dateInput) => {
	// Checks if the date chosen in the input is not from the past
	let isValid = true;
	const now = new Date();
	const offset = now.getTimezoneOffset() * 60000;
	const localISODate = new Date(now - offset).toISOString().split("T")[0];
	const selectedDate = dateInput.value;
	if (selectedDate < localISODate && selectedDate !== "") {
		alert("Error: You cannot select a date in the past.");
		dateInput.value = localISODate;
		isValid = false;
	}
	return isValid;
};

export const setMinimumDate = (dateInput) => {
	// Sets minimum date of the input protecting the user from picking the date from the past
	const now = new Date();
	const offset = now.getTimezoneOffset() * 60000;
	const localISODate = new Date(now - offset).toISOString().split("T")[0];
	dateInput.setAttribute("min", localISODate);
};
