//todo: Написать реализацию динамического массива в js, которая поддерживает добавление и удаление элементов по индексу со сдвигом (все элементы, начиная с переданного индекса до конца, сдвигаются либо на 1 вниз, либо на 1 вверх)

array = [12, 2, 4, 11, 235, 16, 32, 8, 56, 73, 100];

const addElement = (index, elem) => {
  array.splice(index, 0, elem);
};

const deleteElement = (index) => {
  array.splice(index, 1);
};

addElement(11, 200);
deleteElement(0);




