FROM postgres:16

RUN apt-get update && \
    apt-get install -y git make gcc postgresql-server-dev-16

# Clone and patch pg_cron

# extensions
RUN git clone --branch v1.5.2 https://github.com/citusdata/pg_cron.git && \
    sed -i 's/entry \*schedule = calloc(sizeof(entry), sizeof(char));/entry \*schedule_ptr = calloc(sizeof(entry), sizeof(char)); (void)schedule_ptr;/' pg_cron/src/job_metadata.c && \
    cd pg_cron && \
    make && make install && \
    cd .. && rm -rf pg_cron
