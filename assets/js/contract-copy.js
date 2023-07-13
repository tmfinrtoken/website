// JavaScript Document

const copyToClipboard = (elementId) => {
  const temp = document.createElement("input");
  const text = document.getElementById(elementId).innerHTML;
  temp.setAttribute("value", text);
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
};