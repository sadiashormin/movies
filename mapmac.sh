#!/bin/bash
# My first script
if [ -e /etc/mapmac.info ]
then
    echo "Mapped info found"
else
    ifconfig en0 | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}' > /etc/mapmac.info
    echo "Mapping just happended"
fi


result=$( ifconfig en0 | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}' )
if grep -q $result /etc/mapmac.info 
then
    echo "Success !! This card is mapped to this device" 
else
    echo "Error !! This card is not mapped to this device"
fi
