/**
 * 1. Downward
 *      1. querySelector()/querySelectorAll()
 *          ```
 *              const studentList = document.querySelector('.student-list');
 *              const studentA = studentList.querySelector('.student-a')
 *          ```
 *
 *          ```
 *               const studentList = document.querySelector('.student-list');
 *                const studentA = studentList.children[0]
 *                 const studentB =  studentList.children[1]
 *                 const studentC =  studentList.children[2]
 *          ```
 *      2. children
 * 2. Upwards
 *      1. parentElement
 *
 *      ```
 *          const studentA = document.querySelector('li');//select first element
 *          const studentList = studentA.parentElement;
 *      ```
 * 3. Sideways
 *      1. nextElementSibling,
 *          ```
 *              const studentA = document.querySelector('li');
 *              const studentB = studentA.nextElementSibling;
 *              const studentC = studentB.nextElementSibling;
 *          ```
 *        2.  previousElementSibling
 *          ```
 *              const studentC = document.querySelectorAll('li)[2];
 *              const studentB = studentC.previousElementSibling;
 *              const studentA = studentA.previousElementSibling;
 *          ```
 *         3. sideways --> parentElement + children + index
 *          ```
 *              const studentA = document.querySelector('li');
 *              const studentList = studentA.parentElement;
 *              const studentC = studentsList.children[2];
 *          ```
 *
 *      2. parentElement
 */