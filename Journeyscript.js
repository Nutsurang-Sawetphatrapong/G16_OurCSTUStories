document.addEventListener("scroll", () => {
    const boxes = document.querySelectorAll(".box"); // เลือกกล่องทั้งหมด
    boxes.forEach((box) => {
        const boxPosition = box.getBoundingClientRect(); // ตำแหน่งของกล่อง
        if (boxPosition.top < window.innerHeight && boxPosition.bottom > 0) {
            // ถ้ากล่องอยู่ในมุมมองหน้าจอ
            box.classList.add("visible");
        } else {
            // ทำให้กล่องหายไปเมื่อเลื่อนจนสุดจอ
            box.classList.remove("visible");
        }
    });
});