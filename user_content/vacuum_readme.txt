This document has 2 pieces of code, one that goes into automations and one that goes into sensors.
You must do this yourself! It is relatively easy to do!

Paste this content to your own automations. (you can delete this file afterwards)
Change the entity_id's marked with ### to your own vacuum entity_id, do NOT change anything else.
Raise an issue if this does not work for you!

automation:
- id: vacuum_fan_speed_balanced_when_docked
  alias: Vacuum Fan Speed Balanced When Docked
  trigger:
    - platform: state
      entity_id: ### vacuum.xiaomi_vacuum_cleaner
      to: 'docked'
  action:
   - service: input_select.select_option
     data:
       option: Standard
       entity_id: input_select.xiaomi_vacuum

# Xiaomi Fan Speed
- alias: xiaomi vacuum set fan speed
  initial_state: 'true'
  trigger:
  - platform: state
    entity_id: input_select.xiaomi_vacuum
  action:
    service: vacuum.set_fan_speed
    data_template:
      entity_id: ### vacuum.xiaomi_vacuum_cleaner
      fan_speed: >
        {% if is_state('input_select.xiaomi_vacuum', 'Silent') %}
          Silent
        {% elif is_state('input_select.xiaomi_vacuum', 'Standard') %}
          Standard
        {% elif is_state('input_select.xiaomi_vacuum', 'Medium') %}
          Medium
        {% elif is_state('input_select.xiaomi_vacuum', 'Turbo') %}
          Turbo
        {% elif is_state('input_select.xiaomi_vacuum', 'Gentle') %}
          Gentle
        {% endif %}

Paste the following content to your sensors config.
Replace the entity marked like this ###vacuum.xiaomi_vacuum_cleaner### with your own vacuum entity.
Make sure you delete the ### after adding the entity!. Do NOT change anything else!

sensor:
  - platform: template 
    sensors:
      vacuum_battery:
        value_template: '{{ states.###vacuum.xiaomi_vacuum_cleaner###.attributes.battery_level }}'
        device_class: battery
        unit_of_measurement: '%'
        icon_template: >-
          {% set battery_level = states('sensor.vacuum_battery')|int('unknown') %}
          {% set battery_round = (battery_level|int / 10)|int * 10 %}
          {% if battery_level == 'unknown' %}
            mdi:battery-unknown
          {% else %}
            {% if battery_round >= 100 %}
              mdi:battery
            {% elif battery_round > 0 %}
              mdi:battery-{{ battery_round }}
            {% else %}
              mdi:battery-alert
            {% endif %}
          {% endif %}
      vacuum_total_cleaned_area:
        value_template: '{{ states.###vacuum.xiaomi_vacuum_cleaner###.attributes.total_cleaned_area }}'
      vacuum_cleaning_count:
        value_template: '{{ states.###vacuum.xiaomi_vacuum_cleaner###.attributes.cleaning_count }}'
      vacuum_total_cleaning_time:
        value_template: '{{ states.###vacuum.xiaomi_vacuum_cleaner###.attributes.total_cleaning_time }}'
      vacuum_main_brush_left:
        value_template: '{{ states.###vacuum.xiaomi_vacuum_cleaner###.attributes.main_brush_left }}'
      vacuum_side_brush_left:
        value_template: '{{ states.###vacuum.xiaomi_vacuum_cleaner###.attributes.side_brush_left }}'
      vacuum_filter_left:
        value_template: '{{ states.###vacuum.xiaomi_vacuum_cleaner###.attributes.filter_left }}'
      vacuum_sensor_dirty_left:
        value_template: '{{ states.###vacuum.xiaomi_vacuum_cleaner###.attributes.sensor_dirty_left }}'
      vacuum_cleaner_error_sensor:
        value_template: >-
          {% if states.###vacuum.xiaomi_vacuum_cleaner###.attributes.error is defined %}
            {{states.###vacuum.xiaomi_vacuum_cleaner###.attributes.error}}
          {% else %}
            No Error
          {% endif %}
      vacuum_cleaner_status_sensor:
        value_template: >-
          {{ states.###vacuum.xiaomi_vacuum_cleaner###.attributes.status }}
      xiaomi_vacuum_fan_speed_state:
        value_template: >-
          {{ states.###vacuum.xiaomi_vacuum_cleaner###.attributes.fan_speed }}