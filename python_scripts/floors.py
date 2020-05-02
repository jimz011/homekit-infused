###########################################################################################################
# this script to create input_selct and input_text for floors, all depends on how many floors are entered #
# location python_sccript/floors.py                                                                       #
#
###########################################################################################################

input_id = data.get('input_id') # input_select.number_of_floors, input_text.number_of_floors
rooms = data.get('rooms_id') # to creat number of rooms if we are creatinf rooms
if input_id is None:
    logger.warning('=======>  and input_id is required for this script to execute.')
else:    
    if rooms == 'false': #input_id.split('.')[0] == 'input_select': # to ccreat input_text from input_select.number_of_floors
       logger.info('We are creating input_text and input_seleccct for house leveles')
       floors = hass.states.get(input_id).attributes['options']
       for floor in floors:
           input_text_floor = 'input_text.floor_' + floor
           hass.states.set(input_text_floor,floor, {'editable': 'false', 'min': '0', 'max': '10', 'pattern': 'null', 'mode': 'text'})
           # now create input_select
#           input_select_Floor = 'input_select.floor_' + floor
#           hass.states.set(input_select_Floor, 'Select', {'options': 'Select', 'editable': 'false'}) 
                            
    elif rooms == 'true': 
         logger.warning("=======>  we are creating rooms")
         number_of_rooms = hass.states.get(input_id).state
         int_rooms = int(str(number_of_rooms))
         for i in range(int_rooms): 
            input_text_floor = input_id + '_room_' + str(i+1)
            hass.states.set(input_text_floor,str(i+1), {'editable': 'false', 'min': '0', 'max': '10', 'pattern': 'null', 'mode': 'text'})            
    else:
         logger.warning("=======>  Have Nothing to do!")
                 
 