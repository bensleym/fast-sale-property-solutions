const menuOpen = () => {
  const navigation = document.getElementById("navigation");
  navigation.style.left = "0";
};

const menuClosed = () => {
  const navigation = document.getElementById("navigation");
  navigation.style.left = "-100%";
};

export default { menuOpen, menuClosed };
