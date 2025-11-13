const sendForm = () => {
  const form = document.querySelector(".modal");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const text = form.querySelector("input[type=text]");
    const tel = form.querySelector("input[type=tel]");
    const email = form.querySelector("input[type=email]");

    if (!text.value.trim() || !tel.value.trim() || !email.value.trim()) {
      alert("Пожалуйста, заполните все поля формы!");
      return;
    }

    const sendObject = {
      name: text.value.trim(),
      phone: tel.value.trim(),
      email: email.value.trim(),
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(sendObject),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const data = await response.json();
      console.log("Ответ от сервера:", data);
      alert("Форма успешно отправлена!");

      form.reset();
      console.log("Форма очищена");
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      alert("Произошла ошибка при отправке формы. Попробуйте позже.");
    }
  });
};

sendForm();
