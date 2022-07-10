const onClickAdd = () => {
  // テキストボックスの値を初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const new_element_li = document.createElement("li");
  // div生成
  const new_element_div = document.createElement("div");
  new_element_div.classList.add("list-row");
  // <p></p>を生成
  const new_element_p = document.createElement("p");
  new_element_p.textContent = inputText;

  // 完了buttonを生成
  const new_element_button1 = document.createElement("button");
  new_element_button1.textContent = "完成"
  new_element_button1.addEventListener("click", () => {
    // 親タグliを未完了リストから削除sakujyo
    deleteFromIncompleteList(new_element_div.parentNode);

    // 完了リストに追加する要素
    const addTarget = new_element_div.parentNode;

    // テキスト内容を取得
    const textTarget = new_element_button1.parentNode;
    const conplete_text = textTarget.firstChild.textContent;

    // li以下を初期化 DOMにはli以下のデータが残っている。
    addTarget.textContent = null;

    // div生成
    const new_element_div2 = document.createElement("div");
    new_element_div2.classList.add("list-row");

    // <p></p>を生成
    const new_element_p = document.createElement("p");
    new_element_p.textContent = conplete_text;

    // 完了buttonを生成
    const new_element_button3 = document.createElement("button");
    new_element_button3.textContent = "戻る"
    new_element_button3.addEventListener("click", () => {
      const backTarget = new_element_div2.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      // textを取得
      const text = new_element_p.textContent;

      //li以下をDOMからkara初期化
      backTarget.textContent = null;

      // div生成
      const new_element_back_div = document.createElement("div");
      new_element_back_div.classList.add("list-row");

      // p生成
      const new_element_back_p = document.createElement("p");
      new_element_back_p.textContent = text;

      // 完了button生成
      const new_element_button1 = document.createElement("button");
      new_element_button1.textContent = "完了"

      // 削除button生成
      const new_element_button2 = document.createElement("button");
      new_element_button2.textContent = "削除";

      // 未完了のTODOに追加
      backTarget.appendChild(new_element_back_div);
      new_element_back_div.appendChild(new_element_back_p);
      new_element_back_div.appendChild(new_element_button1);
      new_element_back_div.appendChild(new_element_button2);
      document.getElementById("incomplete-list").appendChild(backTarget);
    });

    // 完了したTODOへ追加
    addTarget.appendChild(new_element_div2);
    new_element_div2.appendChild(new_element_p);
    new_element_div2.appendChild(new_element_button3);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除を生成
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

  // 子要素を削除
  const deleteFromIncompleteList = (Target) => {
    document.getElementById("incomplete-list").removeChild(Target);
  };
