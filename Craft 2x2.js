local inv = openInventory()
local map = inv.getMap()
for i=0,17 do
inv.click(10+(i*2))
sleep(200)
inv.click(2)
sleep(200)
inv.click(11+(i*2))
sleep(200)
inv.click(4)
sleep(200)
inv.quick(1)
sleep(200)
inv.click(10+(i*2))
sleep(200)
end