/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var student1 = {
    firstName: 'Obi-Wan',
    lastName: 'Kenobi',
    age: 257,
    location: 'Doku',
};
var student2 = {
    firstName: 'Master',
    lastName: 'Yoda',
    age: 852,
    location: 'Dagobah',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var headerRow = document.createElement('tr');
var firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
var locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
}
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFPQSxJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsU0FBUztJQUNwQixRQUFRLEVBQUUsUUFBUTtJQUNsQixHQUFHLEVBQUUsR0FBRztJQUNSLFFBQVEsRUFBRSxNQUFNO0NBQ2pCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsUUFBUTtJQUNuQixRQUFRLEVBQUUsTUFBTTtJQUNoQixHQUFHLEVBQUUsR0FBRztJQUNSLFFBQVEsRUFBRSxTQUFTO0NBQ3BCLENBQUM7QUFFRixJQUFNLFlBQVksR0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVyRCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0MsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVyRCxlQUFlLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztBQUMzQyxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BELGNBQWMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBQ3hDLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdkMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV0QyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdCLEtBQXNCLFVBQVksRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWSxFQUFFO0lBQS9CLElBQU0sT0FBTztJQUNoQixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsYUFBYSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzlDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsWUFBWSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzVDLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3hCO0FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFN0dWRlbnQge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgYWdlOiBudW1iZXI7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0dWRlbnQxOiBTdHVkZW50ID0ge1xuICBmaXJzdE5hbWU6ICdPYmktV2FuJyxcbiAgbGFzdE5hbWU6ICdLZW5vYmknLFxuICBhZ2U6IDI1NyxcbiAgbG9jYXRpb246ICdEb2t1Jyxcbn07XG5cbmNvbnN0IHN0dWRlbnQyOiBTdHVkZW50ID0ge1xuICBmaXJzdE5hbWU6ICdNYXN0ZXInLFxuICBsYXN0TmFtZTogJ1lvZGEnLFxuICBhZ2U6IDg1MixcbiAgbG9jYXRpb246ICdEYWdvYmFoJyxcbn07XG5cbmNvbnN0IHN0dWRlbnRzTGlzdDogU3R1ZGVudFtdID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5cbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbmNvbnN0IGhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5jb25zdCBmaXJzdE5hbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuXG5maXJzdE5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSAnRmlyc3QgTmFtZSc7XG5jb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5sb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG5oZWFkZXJSb3cuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lSGVhZGVyKTtcbmhlYWRlclJvdy5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcik7XG5cbnRhYmxlLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XG5cbmZvciAoY29uc3Qgc3R1ZGVudCBvZiBzdHVkZW50c0xpc3QpIHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgY29uc3QgZmlyc3ROYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGZpcnN0TmFtZUNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcbiAgY29uc3QgbG9jYXRpb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgbG9jYXRpb25DZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5sb2NhdGlvbjtcbiAgcm93LmFwcGVuZENoaWxkKGZpcnN0TmFtZUNlbGwpO1xuICByb3cuYXBwZW5kQ2hpbGQobG9jYXRpb25DZWxsKTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=