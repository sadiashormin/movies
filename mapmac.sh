#!/bin/bash
# My first script
if [ -e /etc/mapmac.info ]
then
    echo "Mapped info found"
else
    ifconfig en0 | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}' > /etc/mapmac.info
    echo "Mapping just happended"
fi




if grep -q 'b8:e8:56:32:8c:9a' /etc/mapmac.info ##note the space after the string you are searching for
then
echo "Success !! This card is mapped to this device"
else
echo "Error !! This card is not mapped to this device"
fi
