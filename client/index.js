import './EventSourcePolyfill';

const eventSource = new EventSource('./activity?lastEventId=100');

const container = document.getElementById('render');
const stop = document.getElementById('stop');

eventSource.onmessage = (message) => {
  container.innerHTML = message.data + '<br/><br/>' + container.innerHTML;
};

stop.onclick = (event) => {
  event.preventDefault();

  eventSource.close();
  container.innerHTML = 'Event Source closed<br/><br/>' + container.innerHTML;
};
