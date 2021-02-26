// getCSS.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "/style.css");
//   request.onload = () => {
//     console.log("response:");
//     console.log(request.response);
//     const style = document.createElement("style");
//     style.innerHTML = request.response;
//     document.head.appendChild(style);
//   };
//   request.onerror = () => {
//     console.log("请求失败");
//   };
//   request.send();
// };

getCSS.onclick = () => {
  const request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      //说明内容下载成功
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        console.log("加载CSS失败");
      }
    }
  };
  request.open("GET", "/style.css");
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
    // console.log(request.response);
  };
  request.onerror = () => {
    console.log("请求失败");
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.onload = () => {
    console.log(request.response);
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("请求失败");
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // console.log(request.responseXML);
        const text = request.responseXML.getElementsByTagName("warning")[0]
          .textContent;
        console.log(text.trim());
      } else {
        console.log("加载XML失败");
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const obj = JSON.parse(request.response);
        console.log("JSON对象：");
        console.log(obj);
      } else {
        console.log("加载JSON失败");
      }
    }
  };
  request.send();
};

let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        // console.log(array);
        const xxx = document.getElementById("xxx");
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n = n + 1;
      } else {
        console.log("加载下一页失败");
      }
    }
  };
  request.send();
};
