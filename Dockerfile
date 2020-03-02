FROM node:alpine
WORKDIR /usr/src/alarm
COPY *.js /usr/src/alarm/
RUN npm install express
RUN npm install http
RUN npm install socket.io
RUN npm install child_process
RUN npm install visonic-powerlink3

EXPOSE 4455

CMD [ "node", "/usr/src/alarm/alarm_interface.js" ]

