const onClickAdd = () => {
  // 追加ボタン処理
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 子要素を削除
const deleteFromIncompleteList = (Target) => {
  document.getElementById("incomplete-list").removeChild(Target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // 生成
  const new_element_li = document.createElement("li");
  const new_element_div = document.createElement("div");
  new_element_div.classList.add("list-row");
  const new_element_p = document.createElement("p");
  new_element_p.textContent = text;
  const new_element_button1 = document.createElement("button");
  new_element_button1.textContent = "完成"

  // 完了ボタン処理
  new_element_button1.addEventListener("click", () => {
    // 親タグliを未完了リストから削除
    deleteFromIncompleteList(new_element_div.parentNode);
    // 親要素を取得
    const addTarget = new_element_div.parentNode;
    // テキスト内容を取得
    const text = new_element_button1.parentNode;
    const conplete_text = text.firstChild.textContent;
    // li以下を初期化 DOMにはli以下のデータが残っている。
    addTarget.textContent = null;
    // 完了TODOへ移動する要素を生成
    const new_element_div2 = document.createElement("div");
    new_element_div2.classList.add("list-row");
    const new_element_p = document.createElement("p");
    new_element_p.textContent = conplete_text;
    const new_element_button3 = document.createElement("button");
    new_element_button3.textContent = "戻る"

    // 戻すボタン処理
    new_element_button3.addEventListener("click", () => {
      const backTarget = new_element_div2.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);
      // textを取得
      const text = new_element_p.textContent;
      createIncompleteList(text);
      //li以下をDOMから初期化
      backTarget.textContent = null;
    });

    // 完了したTODOへ追加
    addTarget.appendChild(new_element_div2);
    new_element_div2.appendChild(new_element_p);
    new_element_div2.appendChild(new_element_button3);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン処理
  const new_element_button2 = document.createElement("button");
  new_element_button2.textContent = "削除";
  new_element_button2.addEventListener("click", () => {
    deleteFromIncompleteList(new_element_div.parentNode);
  });

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(new_element_li);
  new_element_li.appendChild(new_element_div);
  new_element_div.appendChild(new_element_p);
  new_element_div.appendChild(new_element_button1);
  new_element_div.appendChild(new_element_button2);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
