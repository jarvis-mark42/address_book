FROM ubuntu:14.04
RUN apt-get update
RUN apt-get install -y nodejs npm git git-core

RUN rm -rf address_book
ADD . /address_book

RUN chmod +x /address_book/start.sh

CMD /address_book/start.sh