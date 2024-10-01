from django.contrib import admin
from .models import (
    Room,
    Category,
    Customer,
    Booking,
    Payment,
    CheckIn,
    CheckOut,
    RoomDisplayImages,
    Facility
)


def update_room_is_booked_to_false(model_admin, request, query_set):
    query_set.update(is_booked=False)


update_room_is_booked_to_false.short_description_message = "Update all is_booked to False"


class RoomDisplayImagesStacked(admin.StackedInline):
    model = RoomDisplayImages


class RoomAdmin(admin.ModelAdmin):
    inlines = [RoomDisplayImagesStacked]

    list_display = ['__str__', 'is_booked', 'price_per_night', 'capacity', 'featured','meals_included']
    
    search_fields = ['title', 'room_slug']
    
    list_filter = ['is_booked', 'category', 'featured']

    filter_horizontal = ('special_facilities',) 

    actions = [update_room_is_booked_to_false]



admin.site.register(Room, RoomAdmin)
admin.site.register(Category)
admin.site.register(Customer)
admin.site.register(Booking)
admin.site.register(Payment)
admin.site.register(CheckIn)
admin.site.register(CheckOut)
admin.site.register(RoomDisplayImages)
admin.site.register(Facility)